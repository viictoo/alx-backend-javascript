var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="./Teacher.ts" />
// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
/**
 * @type {{ Cpp?: any; Subject?: any; Java?: any; React?: any; Teacher?: any; }}
 */
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Object.defineProperty(Subject.prototype, "setTeacher", {
            // setter method
            set: function (teacher) { this.teacher = teacher; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Subject.prototype, "getTeacher", {
            // getter method
            get: function () { return this.teacher; },
            enumerable: false,
            configurable: true
        });
        ;
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
// const teacher1: Subjects.Teacher = {
//   firstName: 'John',
//   lastName: 'Doe',
// };
// const subject = new Subjects.Subject();
// subject.teacher = teacher1;
// console.log(subject);
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
// declaration merging
// eslint-disable-next-line @typescript-eslint/no-namespace
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () { return 'Here is the list of requirements for Cpp'; };
        Cpp.prototype.getAvailableTeacher = function () {
            var _a;
            if (((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingC) > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return 'No available teacher';
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
var cpp1 = new Subjects.Cpp();
var cTeacher1 = {
    firstName: 'Burnt',
    lastName: 'Toast',
};
cTeacher1.experienceTeachingC = 10;
console.log("C++");
cpp1.teacher = cTeacher1;
console.log(cpp1.getRequirements());
console.log(cpp1.getAvailableTeacher());
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
// eslint-disable-next-line @typescript-eslint/no-namespace
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () { return 'Here is the list of requirements for Java'; };
        Java.prototype.getAvailableTeacher = function () {
            var _a;
            if (((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingReact) > 0) {
                return ("Available Teacher: ".concat(this.teacher.firstName));
            }
            return 'No available teacher';
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
// eslint-disable-next-line @typescript-eslint/no-namespace
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () { return 'Here is the list of requirements for React'; };
        React.prototype.getAvailableTeacher = function () {
            var _a;
            if (((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingReact) > 0) {
                return ("Available Teacher: ".concat(this.teacher.firstName));
            }
            return 'No available teacher';
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
