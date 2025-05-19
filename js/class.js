
let car = {
    name: "corvet",
    color: "black",
    model: "2024",
    price: "$40,000"
}
console.log(car)
console.log(`The color of the car is ;`,car.color)
console.log(`The name of the car is ;`,car.name)
car.price = "$3131,31414"
console.log(car.price)

car.company = "something"
console.log(car.company)

//we cant modify after freezing
// Object.freeze(car)

car.company = "nothign"
console.log(car.company)

car.price = "000000"
console.log(car.price)

delete car.price;
console.log(car)

// here we are checking the nae key that lies in the car object or not 
console.log("name" in car);


//merging tow object 
let new_car = {
    name: "BMW",
    color: "white",
    HorsePower: "4000hp"
}
const merged_car = {...car, ...new_car}
console.log(`The merged car is :`,merged_car)

const objcons = new Object({"name": "here"})

objcons.name = "santosh",
objcons.klass = "Bachelors",
objcons.no = "this is non of your conserned"
console.log(objcons)

const students  = [
    {
        name: "diwas",
        rollNo: 63,
        address: [{
            ward: "02",
            muncipality: "tilottma",
            locality: "yogikuti"
        }],

        batch : 2081,
    },

    {
        name: "bishop",
        rollNo: 42,
        address: [{
            ward: "9",
            muncipality: "I don't know",
            locality: "undefined"
        }],
        batch : 2010,
    },

    {
        name: "king",
        rollNo: 1,
        address: [{
            ward: "0",
            muncipality: "this can't be done",
            locality: "undefined"
        }],
        batch : 2011,
    },
];

console.log(students[0].address[0].locality)
console.log(students.map((value, index, array)=> {
    return value.address.map((value,index, array) => {
        return value.muncipality
    })
}))
