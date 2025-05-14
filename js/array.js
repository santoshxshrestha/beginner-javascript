let arr = [5,5,23,52,3]
console.log(typeof(arr))

let ary2 = [2,52,32,23,23,52,32,23]
console.log(`The val of the last index is:`,ary2[ary2.length - 1])
console.log(`The val of the second index is:`,ary2[1])



//inserting elemets in an empty array or in an existing array 
let arr3 = [42,2,32,2,52,32,2,2]
arr3[arr3.length] = 1;
console.log(`new last val is :`,arr3[arr3.length-1])

arr3[arr3.length-1] = 0;
console.log(`new last val is :`,arr3[arr3.length-1])


let empty  = [];
let arr5 = Array();
console.log(empty);
console.log(arr5);

arr5[0] = 1;
arr5[1] = 2;
arr5[2] = 3;
arr5[3] = 4;
arr5[4] = 5;
arr5[6] = 5;
console.log(arr5)



//multi dimensional array

const ary6 = [[42,2,42,42,52,3,2,52,52,["true", false, "ok"]]]
console.log(ary6)

console.log(`this is the second element of the first array`, ary6[0][1])
ary6[ary6.length-1] = 100
console.log(`This is  the thing that I have added there at the last`,ary6[ary6.length-1])


console.log([1,2,3,4,5,6,7].at(0))
let array1 = [1,2,3,4,5,6,7,8]
array1.push()
console.log(`The val that I pushed `,array1[array1.length-1])

//pop only removes the elements from the last index of the array
array1.pop()
console.log(`The val after pop `,array1[array1.length-1])
console.log(`beore unshift`, array1)

array1.unshift(23)

console.log(`after unshift`, array1)

array1.shift()
console.log(`after shift`, array1)
console.log(`The val after unshift `,array1[array1.length-1])


let array2 = [1,2,3,4,5,6,72,52,32,52,52,8];
console.log(`the original arrray2 is`,array2)
console.log(array2.slice(0,2))
console.log(`The val after the slice of the 1,4`,array2.slice(1,4))


let array3 = [1,2,3,4,5,6,7,8,9];
console.log(`the output after usign the splice 1,4`,array3.splice(1,4))
