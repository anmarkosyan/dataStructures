
//******************* classSyntax *************************
//We define class with using class declaration.To declare class
//use class keyword with the name of the class starting with uppercase.
//difference between function declaration and class declaration
//is that function declaration is hosted and class declaration is not.
//you should at first declare your class and after that access.

class Student {
    //constructor method define properties instead of returning a value as function declaration
    constructor(firstName,lastName,year) {
        //THIS keyword with placeholder or argument name is equal to  class properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}
//use NEW keyword  for calling a constructor
//this tells JS to create new instance .
//without the NEW keyword THIS would not point to the newly created object
const firstStudent = new Student('Mike','Daniels',1);
const secondStudent = new Student('Dora', 'Trump',3);

console.log(firstStudent);
console.log(firstStudent.firstName);
console.log(firstStudent.lastName);
console.log(firstStudent.grade);
console.log(secondStudent);
console.log(secondStudent.firstName);
console.log(secondStudent.lastName);
