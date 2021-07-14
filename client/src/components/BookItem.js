import React from 'react'

const BookItem = ({ book, button }) => {
  return (
    <div className="book-card">
      <div className="card-top">
        <div>
          <h3>{book.title}</h3>
          <h4>{book.authors}</h4>
        </div>
        <div>
          <button>View</button>
          <button><a href={book.link}>{button}</a></button>
        </div>
      </div>
      <div className="card-bottom">
        <img style={{height:'200px', marginRight:'20px'}} src={book.image} alt="" />
        <p>{book.description}</p>
      </div>
    </div>
  )
}

export default BookItem
