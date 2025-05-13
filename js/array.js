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
