const express = require('express');
const app = require('liquid-express-views')(express());
const port = 3000;

app.listen(port, () => {
    console.log('Port Linked')
})

app.get('/', (req, res) =>{
    res.send('')
})

app.get('/new', (req, res) =>{
    res.render('new')
})

app.post('/new', (req,res) => {

})