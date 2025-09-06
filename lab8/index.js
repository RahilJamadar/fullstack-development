const express = require('express');
const userQuery = require('./query/userQuery');

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
    const users= await userQuery.getAllUsers();
    res.send(users);
});

app.post("/createUser", async (req, res) => {
    const newUser = await userQuery.createUser(req.body);
    res.status(201).send(newUser);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
