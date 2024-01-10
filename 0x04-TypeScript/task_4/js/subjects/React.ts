// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Subjects {
  export interface Teacher {
  experienceTeachingReact?: number;
  }
  export class React extends Subjects.Subject{
    getRequirements(): string { return 'Here is the list of requirements for React'}
    getAvailableTeacher(): string {
      if (this.teacher?.experienceTeachingReact > 0) {
        return (`Available Teacher: ${this.teacher.firstName}`)
      }
      return 'No available teacher';
    }
  }
}