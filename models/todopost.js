const mongoose = require('mongoose');


//creating schema
const postschmea = {
    taskheading: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: false,
    },
    status: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }

}

//creating model of that schema

//exporting it in posts (routes ko) and creating model of the schema at the same time


module.exports = mongoose.model('Posts', postschmea);