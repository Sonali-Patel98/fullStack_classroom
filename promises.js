function ayush(){
    console.log("hello");
}
setTimeout(() =>{
    ayush()
    console.log("Ayush")

},200)




const fs=require("fs")
fs.readFile("file.txt", "utf-8" , function(err,data){
    if(err){
        console.log(data)
    }
    else{
        console.log(err)
    }
})



const nayapromie = new Promise((resolve, reject) => {
    let success = true; 
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

nayapromie
.then(() => console.log("ye hua resolve"))
.catch(() => console.log("ye hua resolve"))