/* Unused due to assignment requiring object literals
class Subject {
    students = []
    teachers = []
    constructor(name) {
        this.name = name;
    }
}
*/

// 1

let fishwarts = {
    name: "Fishwarts",
    students: [],
    teachers: [],
    address: "Fish street avenue 13",
    zipcode: "FW99999",
    city: "Fishtown",
    fireTeacher: function(teacher) {
        const count = teacher.subjects.length
        for (let i = 0; i < count; i++) {
            console.log("fire!!!")
            teacher.quitSubject(teacher.subjects[i])
        }
        console.log("splice!!!")
        this.teachers.splice(this.teachers.indexOf(teacher), 1)
    },
    relegateStudent: function(student) {
        for (subject in teacher.subjects) {
            student.quitSubject(subject)
        }
        this.students.splice(this.students.indexOf(student), 1)
    },
};

// 1

let math = {
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

let fishing = {
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

let swimming = {
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

let blobert = {
    name: "Blobert Blobfish",
    age: "17",
    gender: 1,
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject)
        subject.students.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.students.splice(subject.students.indexOf(this), 1)
        return this
    }
}

let tuna = {
    name: "Tuna Lisa",
    age: "17",
    gender: 2,
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject)
        subject.students.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.students.splice(subject.students.indexOf(this), 1)
        return this
    }
}

let salomon = {
    name: "Salomon",
    age: "18",
    gender: 1,
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject)
        subject.students.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.students.splice(subject.students.indexOf(this), 1)
        return this
    }
}

let laxakin = {
    name: "Laxakin Waterwaker",
    age: "17",
    gender: 1,
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject)
        subject.students.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.students.splice(subject.students.indexOf(this), 1)
        return this
    }
}

let mermer = {
    name: "Mermer Maid",
    age: "17",
    gender: 2,
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject)
        subject.students.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        subject.students.splice(subject.students.indexOf(this), 1)
        return this
    }
}

// 2

let krake = {
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

let scylala = {
    name: "Scylala Lala",
    subjects: [],
    addSubject: function(subject) {
        this.subjects.push(subject)
        subject.teachers.push(this)
        return this
    },
    quitSubject: function(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1)
        console.log(subject.teachers.includes(this))
        subject.teachers.splice(subject.teachers.indexOf(this), 1)
        return this
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

fishwarts.teachers.push(scylala)
scylala.addSubject(math)
scylala.addSubject(swimming)
console.log(fishwarts, scylala, math, swimming)
fishwarts.fireTeacher(scylala)
console.log(fishwarts, scylala, math, swimming)
