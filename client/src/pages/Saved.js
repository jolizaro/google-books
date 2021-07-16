import React, { useState, useEffect } from 'react'
import BookList from '../components/BookList';
import Hero from '../components/Hero';
import axios from 'axios';

const Saved = () => {
  const [saved, setSaved] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  useEffect(()=>{
    fetch("/api/books")
    .then(response=>response.json())
    .then(data=>{
    
      setSaved(data)
    })
    if(deleteSuccess) {
      setDeleteSuccess(false);
    }
  },[deleteSuccess])

  const handleDelete = (book) => {
    axios.delete(`http://localhost:3001/api/books/${book._id}`)
    .then(response => {
      console.log(response)
      setDeleteSuccess(true);
    });
  }

  return (
    <div className="page">
       <Hero />
      <BookList btnText="Delete" list={saved} headerText="My Library" btnFunction={handleDelete} />
    </div>
  )
}

export default Saved
