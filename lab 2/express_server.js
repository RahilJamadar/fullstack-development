const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/sendingName",(req,res)=>{
    const {name,id} = req.body;
    console.log(`Name: ${name}, ID: ${id}`);
    res.send(`Received name: ${name} and ID: ${id}`);
})