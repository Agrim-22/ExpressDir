const express=require('express');
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});
app.get("/",(req,res)=>{
    res.send("Hello i am root");
});
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let code=`<h1>welcome to the page of @${username}!</h1>`
    res.send(code);
});
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>")
    }
    res.send(`<h1>these are serach resultes of query: ${q}</h1>`);
});