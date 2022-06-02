const express = require('express');
const app = require('liquid-express-views')(express());
const scientists = require('./scientists')
const port = 3000;

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

app.get('/new', (req, res) =>{
    res.render('new', {
        allScientists:scientists
    })
})

app.post('/new', (req,res) => {
    scientists.push(req.body);
    res.send(scientists);
    res.render('new')
})

app.get('/index', (req, res) =>{
    res.render('index')
})

app.listen(port, () => {
    console.log('Port Linked')
})