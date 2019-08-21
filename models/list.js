const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true

    },
    category:{
        type: String,
        required:  true
    },
    duedate:{
        type: String,
        required:  true
    }
});

const list  = mongoose.model('list',listSchema);

module.exports = list;