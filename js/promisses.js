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

function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve({
                    name: "Santosh Shrestha",
                    phone: "lol",
                    email: "santosh@gmail.com",
                });
            } else {
                reject("something went wrong !!!");
            }
        }, 100);
    });
}
