// function constructor 
// usng function a functin consitructor is created 
//
// this keyword is used to refer the current object 
// the current object in person cnosdtructor are the variable 
// name ,age, address

// function person(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     
//     this.getName = function() {
//         return `${this.name} is ${this.age} years old and lives in ${this.address} and he is ${this.nationality}`
//     }
// }
//
// const person1 = new person("santsoh", 23, "Golpark");
// console.log(person1.getName());
//
// person1.name = "sanish"
// console.log(person1.getName());
//
// person.prototype.nationality = "Nepali";
// console.log(person1.getName())
//
// console.log(person1.nationality)
//
// console.log(person1.name)
//
// function SimpleInterest(principle, time, rate){
//     this.principle = principle;
//     this.time = time;
//     this.rate = rate;
//
//     this.SimpleInterest = function() {
//         let si = (this.principle * this.time * this.rate)/100
//         return `$${si} is your total simple interest`;
//     }
//
// }
// const interest1 = new SimpleInterest(20000,4,13);
// console.log(interest1.SimpleInterest());
//
class Student{
    constructor(names, age, address, phone){
        this.names = names;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }

    details() {
        let stuentDetails = `${this.names} is ${this.age} years old and he lives in ${this.address}, his phone numer is ${this.phone}`
        return stuentDetails;
    }
}
class section extends Student{
    constructor(name, age, address, phone, section){
        super(name, age, address, phone)
        this.section = section;
    }

    sect(){
        return `${this.names} if of section ${this.section}`
    }
    
}
let santosh = new Student("Santosh", 20, "Golpark", "None of your business");
console.log(santosh.details());

let samip = new section("samip", 28, "pulchowk", "None of your business", "A section");
console.log(samip.sect());

