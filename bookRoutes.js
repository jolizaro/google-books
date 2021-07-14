const express = require("express")
const router = express.Router()
const {getBooks, addBook, deleteBook} = require("./bookController")


router.route("/books")
    .post(addBook)
    .get (getBooks)
router.route("/books/:id")
    .delete( deleteBook)
    
    

module.exports = router