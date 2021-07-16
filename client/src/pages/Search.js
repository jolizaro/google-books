import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import Hero from '../components/Hero';
import axios from 'axios';

const Search = () => {
  const [searched, setSearched] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm)
    axios.post('/search', { searchTerm })
    .then(response => {
      console.log(response.data);
       setSearched(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const handleSave = (book) => {
    axios.post(`http://localhost:3001/api/books`, book)
    .then(response => {
      console.log(response.data);
    })
  }

  return (
    <div className="page">
      <Hero />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <BookList headerText="Search Results" list={searched} btnText="Save" btnFunction={handleSave} />
    </div>
  )
}

export default Search
