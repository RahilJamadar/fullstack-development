const express = require('express');

const app = express();
const port = 4002;


app.get('/getTeacher', (req, res) => {
    res.json({teachers : [{name: 'Mahadev', age: 29}, {name: 'Sonali', age: 28}], from: 'server2'});
});

app.listen(port, () => {
  console.log(`Server2 is running on ${port}`);
});