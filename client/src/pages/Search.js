import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import Hero from '../components/Hero';

const Search = () => {
  const [searched, setSearched] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="page">
      <Hero />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <BookList headerText="Search Results" />
    </div>
  )
}

export default Search
