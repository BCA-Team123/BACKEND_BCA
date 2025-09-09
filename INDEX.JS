const http=require("http");

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==="/"){
        res.end("hello backend");
    }
    else if(url==="/home"){
       res.end("Welcome to home"); 
    }
    else if(url==="/home/page"){
        res.end("welcomr to first page");
    }
    else if(url==="/home/page/help"){
        res.end("welcomr to help section");
    }

    else if(url==="/home/page/help/1"){
        res.end("welcomr to help");
    }
    else if(url==="/home/page/help/main"){
        res.end("welcomr to main");
    }
    else
        res.end("no path created"); //function new HELLO
    
}
)

PORT=2000;
server.listen(PORT,()=>console.log(`server is connected`));

