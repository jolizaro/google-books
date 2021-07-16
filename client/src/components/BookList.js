import React from 'react'
import BookItem from './BookItem';

const BookList = ({ btnText, headerText, list, btnFunction }) => {
  return (
    <div style={{width: '100%'}}>
      <h1>{headerText}</h1>
      <div>
        {list.map(book=>(
          <BookItem button={btnText} book= {book} btnFunction={btnFunction} />
        ))}
      </div>
    </div>
  )
}

export default BookList
