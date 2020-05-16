
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
        this.tardies = 0;
        this.scores = [];
    }
    // 1st instance method
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    //2nd instance method
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) return 'You are expelled!!!'
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    //3rd instance method
    addScore(score){
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce((a,b) => a+b);
        return sum / this.scores.length;
    }
    //static method for a class method,using STATIC keyword,for creating utility functions
    static enrollStudent(){
        return 'This is  enroll students!!'
    }
}

//use NEW keyword  for calling a constructor
//this tells JS to create new instance .
//without the NEW keyword THIS would not point to the newly created object
const firstStudent = new Student('Mike','Daniels',1);
const secondStudent = new Student('Dora', 'Trump',2);

console.log(firstStudent);
console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log(firstStudent.tardies);
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.clear()


console.log(secondStudent.fullName());
console.log(secondStudent.addScore(45));
console.log(secondStudent.addScore(89));
console.log(secondStudent.addScore(99));
console.log(secondStudent.calculateAverage());
//how to access class method,it CANNOT be called through class instance
console.log(Student.enrollStudent());



