function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  for(let mark of marks) {
    this.addMark(mark);
  }
}

Student.prototype.getAverage = function () { 
  let sum  = 0;
  for(let mark of this.marks) {
    sum += mark;
  }
  let averageMark = sum/this.marks.length;
  return averageMark;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}