// 1

const fishwarts = {
    name: "Fishwarts",
    students: [],
    teachers: [],
    address: "Fish street avenue 13",
    zipcode: "FW99999",
    city: "Fishtown",
    fireTeacher: function(teacher) {
        while (teacher.subjects.length !== 0) {
            teacher.quitSubject(teacher.subjects[0])
        }
        this.teachers.splice(this.teachers.indexOf(teacher), 1)
    },
    relegateStudent: function(student) {
        while (student.subjects.length !== 0) {
            student.quitSubject(student.subjects[0])
        }
        this.students.splice(this.students.indexOf(student), 1)
    },
};

// 1

const math = {
    name: "Math",
    students: [],
    teachers: [],
    addStudent: function(student) {
        student.enlistToSubject(this)
    },
    addTeacher: function(teacher) {
        teacher.addSubject(this)
    },
    removeTeacher: function(teacher) {
        teacher.quitSubject(this)
    }
};

const fishing = {
    name: "Fishing",
    students: [],
    teachers: [],
    addStudent: function(student) {
        student.enlistToSubject(this)
    },
    addTeacher: function(teacher) {
        teacher.addSubject(this)
    },
    removeTeacher: function(teacher) {
        teacher.quitSubject(this)
    }
};

const swimming = {
    name: "Swimming",
    students: [],
    teachers: [],
    addStudent: function(student) {
        student.enlistToSubject(this)
    },
    addTeacher: function(teacher) {
        teacher.addSubject(this)
    },
    removeTeacher: function(teacher) {
        teacher.quitSubject(this)
    }
};

// 1

const blobert = {
    name: "Blobert Blobfish",
    age: "17",
    gender: 1,
    subjects: [],
    grades: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject)
        subject.students.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.students.splice(subject.students.indexOf(this), 1)
        return this
    },
    addGrade: function(grade, subject) {
        this.grades.push({grade: grade, subject: subject})
    },
    changeGrade: function(grade, subject) {
        this.grades[this.grades.findIndex((x) => x.subject === subject)].grade = grade
        
    },
    removeGrade: function(subject) {
        this.grades = this.grades.filter((x) => x === subject)
    }
}

const tuna = {
    name: "Tuna Lisa",
    age: "17",
    gender: 2,
    subjects: [],
    grades: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject)
        subject.students.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.students.splice(subject.students.indexOf(this), 1)
        return this
    },
    addGrade: function(grade, subject) {
        this.grades.push({grade: grade, subject: subject})
    },
    changeGrade: function(grade, subject) {
        this.grades[this.grades.findIndex((x) => x.subject === subject)].grade = grade
        
    },
    removeGrade: function(subject) {
        this.grades = this.grades.filter((x) => x === subject)
    }
}

const salomon = {
    name: "Salomon",
    age: "18",
    gender: 1,
    subjects: [],
    grades: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject)
        subject.students.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.students.splice(subject.students.indexOf(this), 1)
        return this
    },
    addGrade: function(grade, subject) {
        this.grades.push({grade: grade, subject: subject})
    },
    changeGrade: function(grade, subject) {
        this.grades[this.grades.findIndex((x) => x.subject === subject)].grade = grade
        
    },
    removeGrade: function(subject) {
        this.grades = this.grades.filter((x) => x === subject)
    }
}

const laxakin = {
    name: "Laxakin Waterwaker",
    age: "17",
    gender: 1,
    subjects: [],
    grades: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject)
        subject.students.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.students.splice(subject.students.indexOf(this), 1)
        return this
    },
    addGrade: function(grade, subject) {
        this.grades.push({grade: grade, subject: subject})
    },
    changeGrade: function(grade, subject) {
        this.grades[this.grades.findIndex((x) => x.subject === subject)].grade = grade
        
    },
    removeGrade: function(subject) {
        this.grades = this.grades.filter((x) => x === subject)
    }
}

const mermer = {
    name: "Mermer Maid",
    age: "17",
    gender: 2,
    subjects: [],
    grades: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject)
        subject.students.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.students.splice(subject.students.indexOf(this), 1)
        return this
    },
    addGrade: function(grade, subject) {
        this.grades.push({grade: grade, subject: subject})
    },
    changeGrade: function(grade, subject) {
        this.grades[this.grades.findIndex((x) => x.subject === subject)].grade = grade
        
    },
    removeGrade: function(subject) {
        this.grades = this.grades.filter((x) => x === subject)
    }
}

// 2

const krake = {
    name: "Krake Ken",
    subjects: [],
    addSubject: function(subject) {
        this.subjects.push(subject)
        subject.teachers.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.teachers.splice(subject.teachers.indexOf(this), 1)
        return this
    }
}

const scylala = {
    name: "Scylala Lala",
    subjects: [],
    addSubject: function(subject) {
        this.subjects.push(subject)
        subject.teachers.push(this)
        return this
    },
    quitSubject: function(subject) {
        if (subject) {
            this.subjects.splice(this.subjects.indexOf(subject), 1)
            subject.teachers.splice(subject.teachers.indexOf(this), 1)
            return this
        }
    }
}

// 3

// scylala.addSubject(math)
// console.log(`${scylala.name} - ${scylala.subjects[0].name}`)
// salary missing, propose adding amount of fish food
// oh wait, the assignment meant print objects
// console.log(math, scylala)
// teacher is not added to subject

// 4

// math.students.push(salomon)
// console.log(math.students)

// 5

function addSubjectToTeacher(subject, teacher) {
    teacher.addSubject(subject)
    subject.teachers.push(teacher)
    return teacher
}

// console.log(addSubjectToTeacher(swimming, krake), swimming)

// 6

/*
let scylala = {
    name: "Scylala Lala",
    subjects: [],
    addSubject: function(subject) {
        this.subjects.push(subject)
        subject.teachers.push(this)
        return this
    }
}
*/

// 1

// done, see above

// 2

// blobert.enlistToSubject(math)
// console.log(blobert, math)

// scylala.addSubject(math)
// console.log(scylala, math)

// math.addStudent(blobert)
// math.addTeacher(krake)
// console.log(math, krake, blobert)

// 3

// 4

// scylala.addSubject(math)
// scylala.addSubject(swimming)
// scylala.quitSubject(math)
// console.log(scylala, math)

// 5

function populate() {
    fishwarts.students.push(blobert, laxakin, tuna, mermer, salomon)
    fishwarts.teachers.push(krake, scylala)
    math.addTeacher(scylala)
    swimming.addTeacher(krake)
    fishing.addTeacher(scylala)
    math.addStudent(mermer)
    math.addStudent(laxakin)
    swimming.addStudent(tuna)
    swimming.addStudent(mermer)
    swimming.addStudent(salomon)
    fishing.addStudent(blobert)
    fishing.addStudent(tuna)
}
populate()

// 6

function displayAllStudents() {
    for (student in fishwarts.students) {
        console.log(fishwarts.students[student].name)
    }
    return fishwarts.students
}

// 1

function displayAllSubjectsOfStudents(student) {
    for (subject of student.subjects) {
        console.log(subject.name)
    }
    return student.subjects
}

function displayAllStudentsEnlistedToSubject(subject) {
    for (student of subject.students) {
        console.log(student.name)
    }
    return subject.students
}

function displayAllTeachers() {
    for (teacher in fishwarts.teachers) {
        console.log(fishwarts.teachers[teacher].name)
    }
    return fishwarts.teachers
}

// 2

mermer.addGrade("A", math)
mermer.changeGrade("B", math)
mermer.removeGrade(math)
console.log(mermer)


/**
 * Grades only need to be added to the student,
 * any categories can be derived from there.
 * Storing grades in a single place saves storage
 * and makes it easier to update all grades.
 */