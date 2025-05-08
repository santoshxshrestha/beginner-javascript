// function newFn(a,b) {
//     console.log("Hello there this is inside the funtion");
//     //here c is local variable 
//     let c = a  + b ;
//     console.log(c)
// }

//here a is global variable
// let a = 30;
// let b = 30;
//
// newFn("Hello"," js");
// newFn(a,b);
//
// function wishing() {
//     console.log("Hello there Santosh you are in arch")
// }
// wishing();
//


//Es6 model funtin declation 

// let y = "lol cant do this ";
// const fnName =(x) => {
//     console.log(x)
//     console.log(y)
//
// }
//
// let hello = "hello santosh"    ;
// fnName(hello);
//
// //call back function
// const insieFunction = () => {
//     fnName(14,14)
// }
//
//
// setTimeout(() => {
//     console.log("lol once")
// })
//
// setInterval(() => {
//     console.log("lol again")
//     
// }, 1);


// const interval =  setInterval(()=>{
//     let time = new Date();
//     let hour = time.getHours();
//     let minute = time.getMinutes();
//     let second = time.getSeconds();
//     document.getElementById("clock").
//         innerHTML = `${hour}:${minute}:${second}`
// },1000)

l = 31;
b = 41;
function area (l,b) {
    console.log(l*b,"square_units")
}
area(l,b)
    
