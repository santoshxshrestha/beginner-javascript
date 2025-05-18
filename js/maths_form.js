//this is the use of the math library and we are accessing the value of the pi 
// console.log(Math.PI)
//
// console.log(Math.sqrt(16))
// console.log(Math.sqrt(-12))
// console.log(Math.sqrt(0))
// console.log(Math.sqrt(12.222))
//
//
// //absolute
// console.log(Math.abs(-12))
// console.log(Math.pow(2,2))
// console.log(Math.pow(2,-5))
// console.log(Math.pow(-3,-3))
// console.log(Math.round(4.55))
// console.log(Math.round(4.44))
// console.log(Math.round(-4.55))
//
// console.log(Math.ceil(4.44)) //5
// console.log(Math.ceil(4.01)) //5
// console.log(Math.ceil(-4.21))
// console.log(Math.ceil(-21.01))
//
//
// console.log(Math.floor(-4.4))
// console.log(Math.floor(5.9))
//
// console.log(Math.trunc(3.33333333333333))
// console.log(Math.trunc(3.7777777777))
//
//
// console.log(Math.max(3,4,3,53,43,53,3,3,43,52))
// console.log(Math.min(32,23,2,332,2,32,2,32,2,52))
// let array = [32,42,2,523,52,62,42,62,2,52,52,52]
//
// console.log(Math.sign(4.44))
// console.log(Math.sign(-4.44))
//
// console.log(Math.log(42))
// console.log(Math.log(10))
// console.log(Math.sin(90) + Math.cos(90))
//
// console.log(Math.random());
//
// function generateOtp () {
//     let digits = '0123456789';
//     let otp = '';
//     let len  = digits.length
//     for (i = 0; i< 4; i++) {
//         otp += digits[Math.floor(Math.random()*len)]
//     }
//     return otp;
// }
//
// console.log("your otp is : ");
// console.log(generateOtp())

function generateOtp () {
    let digits = '0123456789';
    let otp = '';
    let len = digits.length
    for(i = 0; i< 4; i++)
        otp += digits[Math.floor(Math.random()*len)]

    document.getElementById("otpNum").innerHTML = otp;
}
