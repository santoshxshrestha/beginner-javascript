// function data() {
//     return "one"
// }
//
// console.log(data());
//  
// async function dat(){
//     return 1;
// }
//
// console.log(dat());
//
// async function datWho(){
//     let res = Promise.resolve("success");
//     // let o = "0"
//     await res
// }
//
// datWho().then((res)=>{
//     console.log("fantastc")
// })
//     .catch((err)=>{
//     console.log(err)
// })






// async function AsyncAwait(){
//     let res = new Promise((res, rej)=>{
//         setTimeout(()=>{
//             return res();
//         },3000)
//     })
//     await res;
// }
//
// console.log("the promise is begin printed")
//
// AsyncAwait().then(()=>{
//     console.log("the promse is resolved")
// })
// .catch((err)=>{
//     console.log(err)
// })
//


async function LoadingApi(){
    let url = fetch("https://jsonplaceholder.typicode.com/users")
    try{
        const response = await url
        if(!response.ok){
            throw ("opps something went wrong !!")
        }
        let data = await response.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }

}
LoadingApi();
