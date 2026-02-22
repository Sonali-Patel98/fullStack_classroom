const http=require('http');
const fs=require("fs");
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("hello this is Section G");
    }
    else if(req.url==='/about'){
        return res.end("this is about section of G");
    }
    else if(req.url==='/contact-us'){
        return res.end("this is about section of G");
    }
    else if(req.url==='/section'){
        return res.end("I'm an G");
    }
    else if(req.url==='/write-logs'){
        const log=`ye hua mera logs ${new Date}\n`
        fs.appendFileSync("logs.txt",log);
        res.end("ye mera log file hae");
    }
    else if(req.url==='/read-logs'){
        const data=fs.readFileSync("logs.txt","utf-8");
        res.end(data);
    }
    else{
        res.end("ye tumhara galt route hai");
    }
    
});
//for bg when server is bg
server.listen(3000,()=>{
    console.log("ye mera chal rha hae port no:3000");
});



// create a sever and make sure that routes log will write all the data to your .txt file 
// create and when you are going to read it will show all the data to your sever and you can,edit,rename,copy and delete this file with route chnages as sepcified, and when u will go to System-speces you can see the platform, cpu uses, how much  memory 
// is free total memory and uptime and when u will go to about you will have to show your name,roll no,section,dob,fav sports & fav player in that particular sports.