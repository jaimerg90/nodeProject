'use strict'
const mongoose = require('mongoose');
const app = require('./app')

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/apiNode')
    .then(() => {
        console.log("Connection OK")
        app.listen(port, () => {
            console.log(`Running on port ${port}`)
        })
    })
    .catch(err => console.log(err))