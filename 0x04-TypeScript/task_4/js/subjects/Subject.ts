// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;
    
    // setter method
    set setTeacher(teacher: Subjects.Teacher) { this.teacher = teacher };
    
    // getter method
    get getTeacher(): Subjects.Teacher { return this.teacher};
  }
}

// const teacher1: Subjects.Teacher = {
//   firstName: 'John',
//   lastName: 'Doe',
// };
// const subject = new Subjects.Subject();

// subject.teacher = teacher1;

// console.log(subject);