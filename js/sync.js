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
async function datWho(){
    let res = Promise.resolve("success");
    await res
}

datWho().then(()=>{
    console.log("fantastc")
})
    .catch((err)=>{
    console.log(err)
})
