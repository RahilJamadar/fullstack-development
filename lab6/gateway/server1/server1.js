const express = require('express');

const app = express();
const port = 4001;


app.get('/getStudent', (req, res) => {
    res.json({student : [{name: 'Payal', age: 20}, {name: 'Rahil', age: 22}], from: 'server1'});
});

app.listen(port, () => {
    console.log(`Server1 is running on ${port}`);
});