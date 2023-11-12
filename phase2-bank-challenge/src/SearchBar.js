import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => (
 <div id='searchdiv'>
    <input id='searchbar'
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
    />
 </div>

);

export default SearchBar;