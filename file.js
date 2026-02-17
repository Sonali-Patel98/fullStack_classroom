const fs=require("fs")
fs.readFile("file.txt", "utf-8" , function(err,date){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
fs.promises.readFile("file.txt" , "utf-8")
.then((data) => console.log(data))
.catch((err) => console.log(err.message))