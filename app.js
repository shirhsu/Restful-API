const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware creation
const postroute = require('./routes/posts')
app.use('/post', postroute)

mongoose.connect("mongodb://localhost/todolist2", { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (!err) {
            console.log("connected to databse")
        } else {
            console.log("error found")
        }
    });

app.get('/', (req, res) => {
    res.send("welocome")
})

app.listen(3000, (req, res) => {
    console.log("Server is starting")
})