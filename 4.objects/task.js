function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []
}

let student1 = new Student("Антон", "мужской", 24);
let student2 = new Student("Мария", "женский", 24)

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty("marks"))
        this.marks.push(...marks);
    }

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty("marks") === false || this.marks.length === 0){
        return 0;
    } else {
        let sum = this.marks.reduce((acc, item, index, arr) => {
            acc += item;
            if(index === arr.length - 1){
                return acc/arr.length;
            }
            return acc;
        }, 0)
        return sum;
    }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
