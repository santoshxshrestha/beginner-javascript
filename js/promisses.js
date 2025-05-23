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

//load actual data
loadData()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });

function actualData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject("something went wrong !!!"));
        }, 100);
    });
}

actualData()
    .then((response) => {
        console.log(response); // Actual user data
    })
    .catch((err) => {
        console.log(err);
    });//load actual data 
