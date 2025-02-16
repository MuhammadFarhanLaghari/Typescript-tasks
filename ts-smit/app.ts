// Question 1: Basic Types and Interfaces

// Create an interface called User with properties for id (number), name (string), email (string). and isActive (boolean). Then, create a function called createUser that takes a user object of type User and returns it. Finally, write code to create a new user and call the function

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
// return user;
// }

// const newUser:User = {
//     id: 101,
//     name: "Ali",
//     email: 'ali@gmail.com',
//     isActive: true
// }
// const result = createUser(newUser)
// console.log(newUser);



// ---------------

// Question 2: Union Types and Type Guards

// Create a type called Input that can be either a number or a string. Then write a function called process Input that takes an argument of type Input and returns a string. If the input is a number, convert it to a string and prepend "Number: "to it. If the input is already a string. prepend "String: to it. Use type guards to check the type of input.

// type Input = number |string;

// function processInput(value: Input){
//     if(typeof value === "number"){
//         console.log(`Number: ${value.toString()}`);    
//     }else{
//         console.log(`String: ${value}`);    

//     }

// }
// processInput(5)
// processInput("hh")

// --------------------


// Question 3: Classes and Inheritance

// Create a base class called Vehicle with properties for make (string), model (string), and year (number). Include a method called getInfo() that returns a string with the vehicle information.

// Then create two subclasses: Car and Motorcycle. The Car class should have an additional property for door's (number), and the Motorcycle class should have a property for hasSidecar (boolean). Override the getInfo() method in each subclass to include the additional information.

// class Vehicle {
//     make:string;
//     model:string;
//     year: number

//     constructor(make: string, model:string, year:number){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     getInfo(): string{
//         return `vehicle : ${this.make}, ${this.model}, ${this.year}`

//     }

// }

// class Car extends Vehicle{
//     door: number

//     constructor(make: string, model:string, year:number, door:number){
//         super(make, model, year)
//         this.door = door

//     }
//     getInfo(): string {
//         return `Car: ${super.getInfo()}, ${this.door}`
//     }

// }

// class Motorcycle extends Vehicle{
//     hasSideCar : boolean

//     constructor(make: string, model:string, year:number, hasSideCar: boolean){
//         super(make, model, year)
//         this.hasSideCar = hasSideCar

//     }
//     getInfo(): string {
//         return `Motorcycle: ${super.getInfo()}, ${this.hasSideCar}`
//     }
// }

// const myCar = new Car('feb', 'toyotta', 2000, 4);
// console.log(myCar.getInfo());

// const myMotorCycle = new Motorcycle('july', "Honda", 2023, false)
// console.log(myMotorCycle.getInfo());


