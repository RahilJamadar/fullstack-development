const express = require("express");

const app = express();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})

app.get("/:message" , (req, res)=>{
    const message = req.params.message;
    res.send(`Name is ${message}`);
})

app.get("/",(req, res)=>{
    res.send("Hello World");
})