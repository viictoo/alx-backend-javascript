interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: unknown;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface printTeacherFunction {
  (
    firstName: string, 
    lastName: string
  ): string;
}
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher("Fuzz", "Zoe"));


// class constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentInstance;
}

// interface to describe the instance of the class
interface StudentInstance {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

class StudentClass implements StudentInstance {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}
const classStudent = new StudentClass('Wuz', 'Steve');
console.log(classStudent.displayName());
console.log(classStudent.workOnHomework());