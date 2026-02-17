// function sonali(){
//     console.log("hello");
// }
// setTimeout(()=>{
//     sonali();
//     console.log("Sonali");
// },1000);
const fs=require('fs');

fs.readFile("setTimeout.txt","utf-8",function(err,data){
    if(err){
         console.log(err);
    }
    else{
        console.log(data);
    }
   
})
