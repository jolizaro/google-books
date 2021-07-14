const asyncHandler = require("express-async-handler")
const Book = require("./ bookModel")

//@desc get all books 
//@route GET /books
//@access public
 const getBooks = asyncHandler(async (req, res)=>{
     const books = await Book.find({})
     if (books){
         res.json(books)
     }else{
         res.status(404)
         throw new Error('books not retrieved');
     }

 })

 //@desc delete a book
//@route DELETE /books/:bookId
//@access private
const deleteBook = asyncHandler(async (req, res)=>{
    const book = await Book.findById(req.params.id)
    if (book){
        book.remove()
        res.status(200).send("book deleted");
    }else{
        res.status(404)
        throw new Error('Book not found');
    }

})
 




 

 //@desc add book
//@route POST /books
//@access private
const addBook = asyncHandler(async (req, res)=>{
    const {title, image, description, link, authors} = req.body 
    
    const book = await Book.create({title, image, description, link, authors})
    res.status(201).json(book)

})
module.exports = {getBooks, addBook, deleteBook}