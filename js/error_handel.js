// let xx = 2;
// try {
//     console.log(xx + yy)
// }catch(error){
//     console.log("error",error)
// }finally{
//     console.log("thinge here")
// }

function validation() {
    let message = document.getElementById("message")
    message.innerHTML = " "
    let new_val = document.getElementById("newValue").value
    

    try {
        if(new_val.trim() == ""){
            throw "Name cannot be empty"
        }
        if(new_val.length() < 20) {
            console.log("hello there ",new_val)
        }
        if(new_val.length<6){
            throw "length of the naeme should be greater then 6"
        }
    }catch(error) {
        console.log("Damn it got error:", error)
    }
}

