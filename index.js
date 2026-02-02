console.log("hei");
console.log("hello world");
const fs=require('fs');
fs.writeFileSync('example.txt',"this is an example file created using Node.js",
    function(e){
        if(e) consloe.log("ye aaya error");
        consloe.log("done");
});
consloe.log("file created successfully");
consloe.log("file system operation completeed");