export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a String');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a Number');
    }
    if (!Array.isArray(students)
        || students.every((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an Array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a String');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)
        || value.every((student) => typeof student !== 'string')) {
      throw TypeError('students must be an Array of strings');
    }
    this._students = value;
  }
}
