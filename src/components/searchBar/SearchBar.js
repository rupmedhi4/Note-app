import React, {  useState } from 'react';
import SearchInput from './SearchInput';
import Button from './../../UI/Button';
import './SearchBar.css';  

export default function SearchBar() {


  const addNotesHandler =()=>{
    
  }
  return (
    <div className="searchbar-container">
      <h1 className="title">NoteBook</h1>
      <SearchInput />
      <div className="stats">
        <span>Total Notes: 0</span>
        <span>Showing: 0</span>
      </div>
      <Button onClick={addNotesHandler}>Add New Notes</Button>
    </div>
  );
}
