const router = require('express').Router();

const courseManager = require('../managers/courseManager');
const { privateGuard } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');

const getHomePage = async (req, res) => {

    const user = req.user;
    const { search } = req.query;

    if (search !== undefined && search == '') {
        return res.redirect('/courses');
    }

    if (user) {
        try {
            const courses = search ? await courseManager.searchCourse(search).lean() : await courseManager.getAll().lean();
            const modifiedCourses = courses.map(c => ({ ...c, createdAt: c.createdAt.toLocaleString() }));
            res.render('courses/home', { courses: modifiedCourses, search });
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            const courses = await courseManager.getThree().lean();
            res.render('courses/home', { courses });
        } catch (error) {
            console.log(error);
        }
    }

}

const getCreatePage = (req, res) => {
    res.render('courses/create');
}

const postCreate = async (req, res, next) => {
    const courseData = req.body;
    const user = req.user;
    courseData.owner = user._id;

    try {
        const course = await courseManager.createCourse(courseData);
        res.redirect(`/`);
    } catch (error) {
        console.log(error);
        res.render('courses/create', { error: getErrorMessage(error) });
    }
}

const getDetailsPage = async (req, res) => {
    const { courseId } = req.params;
    const user = req.user;

    try {
        const course = await courseManager.getCourseById(courseId).lean();

        course.isOwner = course.owner == user?._id;
        course.enrolled = course.enrolled
            .map(id => id.toString())
            .includes(user?._id);

        res.render('courses/details', course);
    } catch (error) {
        console.log(error);
    }

}

const getEditPage = async (req, res) => {
    const { courseId } = req.params;
    const user = req.user;

    try {
        const course = await courseManager.getCourseById(courseId).lean();
        if (course.owner != user._id) {
            throw new Error('You are not an owner of this course review!');
        }
        res.render('courses/edit', course);
    } catch (error) {
        console.log(error);
    }

}

const postEdit = async (req, res) => {
    const { courseId } = req.params;
    const courseData = req.body;

    try {
        const result = await courseManager.updateCourse(courseId, courseData);
        res.redirect(`/courses/${result._id}/details`);
    } catch (error) {
        console.log(error);

        const course = await courseManager.getCourseById(courseId).lean();

        res.render('courses/edit', { error: getErrorMessage(error), ...course });
    }
}

const getDelete = async (req, res) => {
    const { courseId } = req.params;
    try {
        await courseManager.deleteCourse(courseId);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

const getEnroll = async (req, res) => {
    const { courseId } = req.params;
    const user = req.user;

    try {
        await courseManager.enrollForCourse(courseId, user._id);
        res.redirect(`/courses/${courseId}/details`);
    } catch (error) {
        console.log(error);
    }
}

const get404 = (req, res) => {
    res.redirect('/courses');
}

router.get('/', getHomePage);

router.get('/:courseId/details', getDetailsPage);

router.get('/create', privateGuard, getCreatePage);
router.post('/create', privateGuard, postCreate);

router.get('/:courseId/edit', privateGuard, getEditPage);
router.post('/:courseId/edit', privateGuard, postEdit);

router.get('/:courseId/delete', privateGuard, getDelete);

router.get('/:courseId/enroll', privateGuard, getEnroll);

router.all('*', get404);

module.exports = router;