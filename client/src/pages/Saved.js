import React, { useState, useEffect } from 'react'
import BookList from '../components/BookList';
import Hero from '../components/Hero';

const Saved = () => {
  const [saved, setSaved] = useState([]);
  useEffect(()=>{
    fetch("/api/books")
    .then(response=>response.json())
    .then(data=>{
    
      setSaved(data)
    })
  },[])
  return (
    <div className="page">
       <Hero />
      <BookList btnText= "Delete" list={saved} headerText="My Library" />
    </div>
  )
}

export default Saved
