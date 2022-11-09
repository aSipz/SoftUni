function students(input) {
    let courseArray = [];
    input.forEach(line => {
        if (line.includes(': ')) {
            let [currentCourse, capacity] = line.split(': ');
            let courseExist = false;
            capacity = Number(capacity);
            for (const course of courseArray) {
                if (course.name == currentCourse) {
                    course.capacity += capacity;
                    course.placesLeft += capacity;
                    courseExist = true;
                    break;
                }
            }
            if (!courseExist) {
                let course = {
                    name: currentCourse,
                    capacity: capacity,
                    students: [],
                    placesLeft: capacity
                };
                courseArray.push(course);
            }
        } else {
            let currentUser = line.split('[')[0];
            let currentCredits = Number(line.split('[')[1].split(']')[0]);
            let currentEmail = line.split(' email ')[1].split(' joins')[0];
            let courseName = line.split(' joins ')[1];
            for (const course of courseArray) {
                if (course.name == courseName && course.placesLeft >= 1) {
                    let student = {
                        user: currentUser,
                        email: currentEmail,
                        credits: currentCredits
                    }
                    // let studentExist = false;
                    // for (const tempStudent of course.students) {
                    //     if (tempStudent.user == currentUser) {
                    //         studentExist = true;
                    //         break;
                    //     }
                    // }
                    // if (!studentExist) {
                        course.students.push(student);
                        course.placesLeft--;
                        break;
                    // }
                }
            }
        }
    });
    courseArray.sort((a,b) => b.students.length - a.students.length);
    for (const course of courseArray) {
        console.log(`${course.name}: ${course.placesLeft} places left`);
        course.students.sort((a,b) => b.credits - a.credits);
        for (const student of course.students) {
            console.log(`--- ${student.credits}: ${student.user}, ${student.email}`);
        }
    }
}
students(['JavaBasics: 2', 
'user1[25] with email user1@user.com joins C#Basics', 
'C#Advanced: 3', 
'JSCore: 4', 
'user2[30] with email user2@user.com joins C#Basics', 
'user13[50] with email user13@user.com joins JSCore', 
'user1[25] with email user1@user.com joins JSCore', 
'user8[18] with email user8@user.com joins C#Advanced', 
'user6[85] with email user6@user.com joins JSCore', 
'JSCore: 2', 
'user11[3] with email user11@user.com joins JavaBasics', 
'user45[105] with email user45@user.com joins JSCore', 
'user007[20] with email user007@user.com joins JSCore', 
'user700[29] with email user700@user.com joins JSCore', 
'user900[88] with email user900@user.com joins JSCore',
'user11[3] with email user11@user.com joins JSCore',
'JSCore: 2', 
'user11[3] with email user11@user.com joins JSCore',
'user11[3] with email user11@user.com joins JSCore',
'user11[3] with email user11@user.com joins JavaBasics', 
'user11[3] with email user11@user.com joins JavaBasics', 
'user11_[3] with email user11@user.com joins JavaBasics', 
]);