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

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})


app.post('/bmicalculator', (req, res) => {
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let result = (weight / (height * height)) * 703
    res.send(`With a weight of ${weight} lbs and a height of ${height} inches, your total BMI calculation is ${result}`)
})




app.listen(4005, () => {
    console.log('listening on 4005')
})