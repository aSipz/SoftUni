function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let arr = [];
            for (const key in this) {
                arr.push(`${key}: ${this[key]}`)
            }
            let className = this.constructor.name;
            let result = className + ' (';
            result+= arr.join(', ');
            result+= ')'
            return result
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}
toStringExtension()