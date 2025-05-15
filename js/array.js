// let arr = [5,5,23,52,3]
// console.log(typeof(arr))
//
// let ary2 = [2,52,32,23,23,52,32,23]
// console.log(`The val of the last index is:`,ary2[ary2.length - 1])
// console.log(`The val of the second index is:`,ary2[1])
//
//
//
// //inserting elemets in an empty array or in an existing array 
// let arr3 = [42,2,32,2,52,32,2,2]
// arr3[arr3.length] = 1;
// console.log(`new last val is :`,arr3[arr3.length-1])
//
// arr3[arr3.length-1] = 0;
// console.log(`new last val is :`,arr3[arr3.length-1])
//
//
// let empty  = [];
// let arr5 = Array();
// console.log(empty);
// console.log(arr5);
//
// arr5[0] = 1;
// arr5[1] = 2;
// arr5[2] = 3;
// arr5[3] = 4;
// arr5[4] = 5;
// arr5[6] = 5;
// console.log(arr5)
//
//
//
// //multi dimensional array
//
// const ary6 = [[42,2,42,42,52,3,2,52,52,["true", false, "ok"]]]
// console.log(ary6)
//
// console.log(`this is the second element of the first array`, ary6[0][1])
// ary6[ary6.length-1] = 100
// console.log(`This is  the thing that I have added there at the last`,ary6[ary6.length-1])
//
//
// console.log([1,2,3,4,5,6,7].at(0))
// let array1 = [1,2,3,4,5,6,7,8]
// array1.push()
// console.log(`The val that I pushed `,array1[array1.length-1])
//
// //pop only removes the elements from the last index of the array
// array1.pop()
// console.log(`The val after pop `,array1[array1.length-1])
// console.log(`beore unshift`, array1)
//
// array1.unshift(23)
//
// console.log(`after unshift`, array1)
//
// array1.shift()
// console.log(`after shift`, array1)
// console.log(`The val after unshift `,array1[array1.length-1])
//
//
// let array2 = [1,2,3,4,5,6,72,52,32,52,52,8];
// console.log(`the original arrray2 is`,array2)
// console.log(array2.slice(0,2))
// console.log(`The val after the slice of the 1,4`,array2.slice(1,4))
// console.log(`The val after the reverse slice of the 4,1 after reversing`,array2.slice(4,1))
//

// let array3 = [1,2,3,4,5,6,7,8,9];
// console.log(`the original arrray3 is`,array3)
// // console.log(`the output after usign the splice 1,4`,array3.splice(1,4))
//
//     // This removes 1 element starting from index 4.
// console.log(`the output after usign the reverse splice 4,1 after reversing`,array3.splice(4,1))
// console.log(`runned the .toString here for the array3 `,array3.toString())
// console.log(`.jon is used here `,array3.join("-"))
// console.log(`Does 9 included here in the array3`,array3.includes(9))
// console.log(`Does 10 included here in the array3`,array3.includes(10))


// let array5 = [1,2,3,4,5,6,4,7,8,9,21,23];
// // Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
// console.log(`the last index of the occurrence of the 4 is `, array5.lastIndexOf(4))
//
// // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(`the index of the 4 in hte array5 is `,array5.indexOf(4))
// console.log(`array5 after sorting but it will compare the first digit`,array5.sort());
//
// console.log(`this will sort the vals`, array5.sort(
//     function(a,b) {
//         return a -b
//     }
// ));
//
// console.log(`this will sort the vals descenting`, array5.sort(
//     function(a,b) {
//         return b -a 
//     }
// ));
//
//
// let rev_array = [1,42,42,2,3,4,5,6,7,8];
// console.log(`reversed array`,rev_array.reverse())



//array iteration  


// for each


// const array6 = [1,2,42,42,52,2,52,32,52,3252,3,4,5,6,7,8,9];
// const newarray6 = array6.forEach((values, index, array)=>{
//     console.log(`the val is`,values)
//     console.log(`the index is`, index)
//     console.log(`the array is`,array)
// })

const student = [
    {
        name: "Santosh",
        address: [
            {
                permanent: ["Gulmi","Baletaksar",4],
                temprorary: ["Butwal","Golparak", 5],
            },
        ],
        klass: "bachelors",
    },
];

const permanents  = student.forEach((values ) => {
    console.log(values.address[0].permanent[2]);
})

const pern = student.map((values)=> {
    console.log(values.address[0].permanent[2]);
})


//flap map 
//flat map is used to flatten the array which mean it remove the array inside the array 
//flat map takes 3 argumets : value , index, array
//flat map loops the array untill all the elements are extracted 


const array4 = [42,52,52,32,[42,42,52,32],52,32,52,32,42,42]
const array5 = array4.map((values, index, array)=>{
    console.log(values);
})

console.log("----------------------------")
const array6 = array4.flatMap((values, index, array) => {
    console.log(values)
})

//filter creates a new array 
//filter takes 3 arguments : value , index , array
//filter takes a condition and reaturns a new array 
//values that passes the condition are printed 

const filter_array = [1,2,3,4,5,6,7,8,9];
const new_filter = filter_array.filter((values, index, array) => {
    return values>= 50
});

console.log(new_filter)

//reduce 
//reduce take two argument: accumulated value, totalvalue
//reduce changes the value in a single form 
//reduce is used for numeric values
let array7  = [42,42,52,32,52,32,2,32,42,32,42,42];

let array8 = array7.reduce((accumulated, totalvalue) => {
    return accumulated + totalvalue
})


let array9 = array7.reduceRight((accumulated, totalvalue) => {
    return accumulated + totalvalue
})

let array10 = array7.reduceRight((accumulated, totalvalue) => {
    return accumulated - totalvalue
})
console.log(array8)
console.log(array9)
console.log(array10)

//some
//some acts like or logical operator 
//one argument is enought

let array11 = [12,21,41,21,41,241,52,53,436,534,355,42,32,52];
const array12 = array11.some((value)=> {
    return value> 30
})
console.log(array12)

let array13 = [12,21,41,21,41,241,52,53,436,534,355,42,32,52];
const array14 = array13.some((value)=> {
    return value> 30
})
console.log(array14)


//spread operators 
//spread operators mergs two or more array into one 
//it uses 3 dot to rrepresent spread opearatro (..ary1)



let array15 = [1,2,3,4,5,6,7,8,9]
let array16  = ["hello", "there", "this is js", "2g"]
let array17  = [true, false, null]

let merged_array = [...array15,...array16,...array17]
console.log(merged_array)


let array18 = ["ram", "shyam", "hari", "gita", "sita"]
let array19 = [1,2,3,4,5]
let array20 = ["bachelors","master", "phd"]

//extract the boys val and roll numb 3,4,5 wit master val and log it in new array

let array21 = array18.slice(0,3);

let array22 = array19.filter((values)=>{
    values>= 3
});

let array23 = array20.filter((value, index, array) => {
    return value =="master"
})

// let array23 = array
let merged_new = [...array21,...array22,...array23]
console.log(merged_new)

