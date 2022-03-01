const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true })); // use this one when you want to grab information posted from an html form

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2

    res.send(`The result of the calculation is ` + result);
})




app.listen(4005, () => {
    console.log('listening on 4005')
})