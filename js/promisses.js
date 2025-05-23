const loadApi = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let success = true
        if(success){
            return resolve("Api fetched successfully")
        }else
            return reject("something went wrong")
    })
},100)

loadApi.then((response)=> {
    console.log(response)
}).catch((err)=>{
    console.log(err)
})
