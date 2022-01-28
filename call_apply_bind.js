function Teacher(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`I'm ${this.name}, ${this.age} year old teacher.`)
    }
    
}

function Person(name, subject, age = 25){
    this.subject = subject;
    Teacher.apply(this, [name, age]);
    this.info = function(){
        console.log(`Hello ${this.name}, You are teaching ${subject} subject and your age is ${this.age}`);
    }
    
}

let per1 = new Person("Neha", "Math", 23);
let per2 = new Person("Ron", "English", 30);
let per3 = new Person("Sam", "History");

per1.info();
per2.info();
per3.greet();

