import React from 'react'


const SearchBar = ({searchTerm, setSearchTerm, handleSearch}) => {
  return (
    <form className="w-100" onSubmit={handleSearch}>
      <input className="w-50" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search a book by title" />
      <input type="submit" value="Search" />
    </form>
  )
}

export default SearchBar
