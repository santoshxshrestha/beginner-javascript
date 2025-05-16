// console.log(">hello santosh");
//
// console.log(`"this" is the content "here" `);
// let names = "Santosh"
// console.log(`"Hey there my name is ${names}"`);
//
//
// console.log("this is some strin".length)
//
// console.log("hello".at(5))
//
//
// // character checks the character ate hte given index
// console.log("hello santosh".charAt(6));
// let variable = "hello santosh".charAt(6);
// console.log(typeof(variable));



// console.log("hello world".charCodeAt(1))
// let num = "32"
// console.log(num.charCodeAt(1));
//
// let string = "this is some string"
// console.log(string.indexOf("s"))
//
// console.log("hello world".lastIndexOf("o"))



//pad start
//
console.log("hello".padStart(10,"*"));
console.log("hello".padEnd(10,"*"));
console.log("   hello santosh     ".trim());
console.log("    hello santosh again    ".trimEnd());
console.log("    hello santosh again    ".trimStart());


console.log("hello world ".slice(0,5))




// substrng - it is simal to sclice but it does nto accept negative values 

console.log("   hello santsoh ".substring(0, 5));
console.log("hello santosh".substring(2,0))
console.log("hello world ".substring(-3, -7));


//replace the content here 
console.log("hello world".replace("hello" , "this is string"))


console.log("-".repeat(78))
//replace all 
console.log("hIllo".replaceAll("I", "e"))


//repeat the content 
console.log("-".repeat(78))

let str = "here some of the the string";
let new_str = str.split(" ",1)


const str12 = "hello santsoh";
let newstr_here = str12.split(" ", 1);
console.log(newstr_here)



//includes test if the content are there in the given string 
console.log("hello world".includes("hello santosh"));

let a= "hello";
let b= " santosh";

console.log(a.concat(b))

console.log("hello world".toUpperCase());
console.log("HELLO WORLD".toLowerCase());
console.log("hello satosh".toLocaleLowerCase());


//one of the use inputs there nameand yo have to convert take the first letter of the name and print as the gmail cover 

let naming = prompt("Enter your name ", "Santosh");
let firstletter = naming.split(" ")[0].charAt(0).toUpperCase();
let lastletter = naming.split(" ")[1].charAt(0).toUpperCase();
document.getElementById("letter").innerHTML = firstletter + lastletter;
