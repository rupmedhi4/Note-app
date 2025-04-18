import React, {  useContext, useState } from 'react';
import SearchInput from './SearchInput';
import Button from './../../UI/Button';
import './SearchBar.css';  
import { Context } from './../../Context/Context';

export default function SearchBar() {

  const { isOpenModal, setIsOpenModal,notes,showingNote}=useContext(Context)

  const addNotesHandler =()=>{
    setIsOpenModal(!isOpenModal)
  }
  return (
    <div className="searchbar-container">
      <h1 className="title">NoteBook</h1>
      <SearchInput />
      <div className="stats">
        <span>Total Notes: {notes.length}</span>
        <span>Showing: {showingNote.length}</span>
      </div>
      <Button onClick={addNotesHandler}>Add New Notes</Button>
    </div>
  );
}
