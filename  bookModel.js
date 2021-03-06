const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true

    },
    image:{
        type: String, 
        required: true
    },
    description:{
        type: String,
        required: true
    },
    link:{
        type: String, 
        required: true
    }, 
    authors: {
        type: String,
        required: true
    }
},{
    timestamps: true
})
const Book = mongoose.model('Book', bookSchema)

module.exports = Book