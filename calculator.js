const express = require('express');
const app = express();
const bodyPraser = require('body-parser');

app.use(bodyPraser.urlencoded({extended:true}));

app.get('/calculator',(req,res)=> res.sendFile(__dirname+'/bmiCalculator.html')
)

app.post('/',(req,res)=> {
    let height = parseFloat(req.body.height);
    let weight = parseFloat(req.body.weight);
    res.send("your height is: "+ height+ " your wieght is: "+weight+" so your bmi is: "+ weight/(height/100*height/100))
});

app.listen(3000,()=> console.log("some stupi massege, 3000"));