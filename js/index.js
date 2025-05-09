/// console.error("lol this is the error here ");
// console.log("this is a sucess message");

// document.write("this message is from document");

// console.log("<h1>this is new heading</h1>");
// document.write("<h1> this is a new headig");

// alert("this is a popup box");
// confirm("this is a updated pop up box");

// input method

//   console.log ( parseInt (prompt("enter a name")) + parseInt( prompt("enter a name")))
  
//   console.log ( parseFloat (prompt("enter a number")) + parseFloat( prompt("enter a number")))
// console.log (prompt("the text is","sunil"));


// var s = 20;
// console.log(s);

// let a = 20;
// console.log(a);

// let c = 20;
// c++;
// console.log(c);

// const array = [1, 2, 3, 4, 5];
// console.log(array);

// DATA TYPE
// 1 primitive datatypes

// let num1 = 3;
// console.log(num1);
// console.log(typeof num1);

// let str = "Hello BMC";
// console.log(str);
// console.log(typeof str);

// let num;
// console.log(num);
// console.log(typeof num);

// let num2 = null;
// console.log(num2);
// console.log(typeof num2);

// let istrue = true;
// console.log(istrue);
// console.log(typeof istrue);

// let str1 = Symbol("hello");
// let str2 = Symbol("world");
// console.log(str1 == str2);

// let val =
//   BigInt(34474376476374734766782647826784678478534673856835665783573657645785);
// console.log(val);

// console.log(typeof { name: "sunil" });
// console.log(typeof [1, 2, 3, 4]);

//operator

// console.log(a + s);
// console.log(2 % 2 == 0 || 2 < 2);

// let num4 = 4;
// console.log(++num4);

// let num5 = 5;
// console.log(--num5);

// assignment operator
// let val1 = 6;
// val1 += 4;
// console.log(val1);

//comparsion operator    throw the result in Boolean
// console.log(2!=2)
// console.log(2>2)
// console.log(2<=2)
// console.log(2 == "2"); // two check the data type
// console.log(2 === "2"); //to check the data type and string
// console.log(2 !== "3"); //to  check the data type
// console.log(2 !== "3" && "Hero" == "hero");

//ternerary operator
// console.log(2 < 3 ? "hero" : "zero");
// console.log("BMC" >= "BMC");

// let gpa = parseFloat(prompt("enter a gpa"));
// console.log(gpa <= 4 && gpa >= 3.14 ? "wow" : "xii");

// conditional statement;
// if (2 == 2) {
//   console.log("Equal");
// }

// if (3 == 4) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// let wheather = "sunny";

// if ((wheather = "sunny")) {
//   console.log("i might get sun burn");
// } else if ((wheather = "rainny")) {
//   console.log(" I should carry an umberlla");
// } else if ((wheather = "foggy")) {
//   console.log(" I should wear a  warm cloth ");
// } else {
//   console.log("opps!! bad foramat");
// }

// let day = prompt("enter a day");
// switch (day) {
//   case "sunday":
//     console.log("not again!");
//     break;

//   case "monday":
//     console.log("mon wala day");
//     break;

//   case "tuesday":
//     console.log("Hanuman day");
//     break;
//   case "wednesday":
//     console.log("my borth wala day");
//     break;

//   case "thursday":
//     console.log("the week is going to be end");
//     break;

//   case "friday":
//     console.log("Happy Friday");
//     break;

//   case "saturday":
//     console.log("hurrey  that a  holiday");
//     break;
// }

// let gpa = parseFloat( prompt("enter a gpa secrure by you"));
// if (gpa <= 4 || gpa >= 3.6) {
//   console.log("A+");
// } else if (gpa < 3.6 || gpa >= 3) {
//   console.log("A");
// } else if (gpa < 3 || gpa >= 2.6) {
//   console.log("B+");
// } else if (gpa < 2.6 || gpa >= 2) {
//   console.log("B");
// } else if (gpa < 2 || gpa >= 1.6) {
//   console.log("C+");
// }
//  else if( gpa < 1.6 || gpa > 0)
// {
//   console.log("NG");
// }


// let n1 = Number(prompt("Enter the first number"));
// let n2 = Number(prompt("Enter the second number"));
// let operation = prompt("Enter the operation you want to perform (+, -, *, /)");

// switch (operation) {
//   case "+":
//     let sum = n1 + n2;
//     console.log("Sum:", sum);
//     break;

//   case "*":
//     let mul = n1 * n2;
//     console.log("Multiplication:", mul);
//     break;

//   case "/":
//     let div = n1 / n2;
//     console.log("Division:", div);
//     break;

//   case "-":
//     let sub = n1 - n2;
//     console.log("Subtraction:", sub);
//     break;

//   default:
//     console.log("Invalid operation");
// }
 
// function newFun(a,b)
// {
// console.log("did the fun work");
// let c=a+b;
// console.log(c);
// }
// let x=5;
// let y=4;                                                                                               
// newFun(x,y);
// newFun(10,34);
// newFun("hero","zero");

// let suf=22;
// function anotherFun(){
//     let guf=23;
//     let hawa=guf+suf;
//     console.log(hawa)
// }
// anotherFun();

// // const funName=(x)=>
// // {
// // console.log(x);
// // }
// // let hello=("sunil")
// // funName(hello);

// const funName=(a,b)=> //arrow function
//     {
//         console.log("function");
//         let x=a+b;
//     console.log(x);
//     }
//     funName(3,4);

//     const insideFunction=(param1,param2)=>{
//         funName(param1,param2);

//     }
//     insideFunction(14,14);

//     setTimeout(()=>{
//         console.log("print after some delay:");

//     },3000)
//     const interval= setInterval(()=>{
//         let time = new Date();
//         let hour = time.getHours();
//         let minute = time.getMinutes();
//         let second = time.getSeconds();
//         document.getElementById("clock").
//             innerHTML = `${hour}:${minute}:${second}`
//     },1000)
    
//     function area(l,h){
//         l=a;
//         h=b
//         console.log("the area of rectangle is",l*h);
//     }
//     function simple_interest(p,t,r) {
//         console.log("The simple interest is: ")
//        console.log((p*t*r)/100)
//    }
//    let p =42425;
//    let t = 52;
//    let r = 12;
//    simple_interest(p,t,r);
   
// let a1=30;
// let a2=40;
// function name(){
//     return a1+a2;
//     }
//     console.log(`the name is ` ,name());

// ____________________LOPPING Function___________________________
// 1.For loop.
// 2. Do while.
// 3. While.

//.....................For Loop...............//
for(let i=0; i>=5;i++)  //simple syntax for increament 
{
    console.log(i);
}
for(let i=5; i>0;i--)  //simple syntax for decreament
{
    console.log(i);
}/ console.log("Hello santosh")
// if (2==2){
//     console.log("equal")
// }else{
//     console.log("not equal")
// }


// let weather = "rainny"
// if (weather== "sunny"){
//     console.log("I might get sun burn")
// }else if (weather=="foggy") {
//     console.log("I should ware some warm cloth")
//     
// }else if (weather=="rainny") {
//     console.log("I should carry an umberella")
// }else{
//     console.log("opps!! bad choice")
// }
//
// let day = prompt("Enter a day");
// switch (day) {
//     case "sunday":
//         console.log("Not again!!");
//         break;
//
//     case "Monday";
//         console.log("opps! I am already bored");
//         break;
//         
//     case "Tuesday";
//         console.log("satuarday is comming I am excited");
//         break;
//     case "Satuarday";
//         console.log("Damn it boarng")
//     default:
//         console.log("sauarday is coming");
//         break;
// }
//


// let gpa = parseFloat(prompt("Enter the gpa"));
// if (gpa>= 3.6) {
//     console.log("A+")
// }else if (gpa>=3) {
//     console.log("A")
//     
// }else if (gpa>=2.6) {
//     console.log("B+")
// }else if (gpa>=2) {
//     console.log("B")
// }else if (gpa<2) {
//     console.log("c+")
// }
//

// let num1 = parseFloat(prompt("Enter a first float value"));
// let num2 = parseFloat(prompt("Enter a second float value"));
// let operator = prompt("Enter the operator of the calculation");
// switch (operator) {
//     case "+":
//         console.log("num1 + num2 = ",num1+num2)
//         break;
//     case "-":
//         console.log("num1 - num2 = ",num1-num2)
//         break;
//     case "*":
//         console.log("num1 * num2 = ",num1*num2)
//         break;
//     case "/":
//         console.log("num1/num2 = ",num1%num2)
//         break;
//     case "%":
//         console.log("num1 % num2 = ",num1%num2)
//     default:
//         console.log("Invald value")
//         break;
// }










































