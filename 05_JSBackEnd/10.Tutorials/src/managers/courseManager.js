const Course = require('../models/Course');

exports.getCourseById = courseId => Course.findById(courseId);

exports.getAll = () => Course.find().sort('createdAt');

exports.getThree = () => Course.find().sort({ enrolled: -1 }).limit(3);

exports.createCourse = courseData => Course.create(courseData);

exports.updateCourse = (courseId, courseData) => Course.findByIdAndUpdate(courseId, courseData, { runValidators: true });

exports.deleteCourse = courseId => Course.findByIdAndDelete(courseId);

exports.enrollForCourse = async (courseId, userId) => {
    const currentCourse = await this.getCourseById(courseId);

    if (currentCourse.enrolled.map(id => id.toString()).includes(userId) || currentCourse.owner == userId) {
        throw new Error('Unauthorized operation');
    }

    currentCourse.enrolled.push(userId);
    await currentCourse.save();
};

exports.searchCourse = search => {
    const pattern = new RegExp(search, 'i');
    return Course.find({ title: { $regex: pattern } });
};