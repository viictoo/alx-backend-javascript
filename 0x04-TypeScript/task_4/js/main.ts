export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React()
export const cTeacher: Subjects.Teacher = {
  firstName: 'Burnt',
  lastName: 'Toast',
};
cTeacher.experienceTeachingC = 10;


console.log(`C++`);
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log(`Java`);
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log(`React`);
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
