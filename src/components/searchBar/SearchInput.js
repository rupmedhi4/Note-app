import React, { useContext, useState } from 'react';
import './SearchInput.css'; 
import { Context } from '../../Context/Context';

export default function SearchInput() {
  const { searchNote, setSearchNote } = useContext(Context);

  return (
    <div className="search-container">
      <label htmlFor="search" className="search-label">Search Note:</label>
      <input
        id="search"
        type="text"
        placeholder="Type to search..."
        value={searchNote}
        onChange={(e) => setSearchNote(e.target.value)}
        className="search-input"
      />
    </div>
  );
}
