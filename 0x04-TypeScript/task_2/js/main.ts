interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
  
}
class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): (Director | Teacher) {
  return Number(salary) < 500 ? new Teacher : new Director;
}
// type guard to narrow down the type and inform TypeScript that the object is DirectorInterface
// checks if the workDirectorTasks property exists on the object
function isDirector(employee: TeacherInterface | DirectorInterface): employee is DirectorInterface {
  // return (employee as Director).workDirectorTasks !== undefined;
  return 'workDirectorTasks' in employee;;
}

console.log(createEmployee(50));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));



function executeWork(employee: DirectorInterface | TeacherInterface): string {
  return (isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks());
}

// String literal types 
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  return todayClass === "Math" ? "Teaching Math": "Teaching History";
}
console.log(executeWork(createEmployee(10))); // Getting to work
console.log(executeWork(createEmployee(2000)));  // Getting to director tasks
 
console.log(teachClass("Math"));
console.log(teachClass("History"));
// console.log(teachClass("Life")) = Argument of type '"Life"' is not assignable to parameter of type 'Subjects'.