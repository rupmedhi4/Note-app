import React, { useContext } from 'react';
import { Context } from './../../Context/Context';
import './NotesList.css';

export default function NotesList() {
  const { 
    notes, setNotes, searchNote,
     showingNote,isOpenModal,
     setIsOpenModal,setNotesTitle,
     setNotesDescription,
     setEditId
  } = useContext(Context);

  const deleteHandler = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };
  const editHandler = (id) => {
    setIsOpenModal(!isOpenModal)
    let editNote = notes.filter((note)=>note.id === id)
    setNotesTitle(editNote[0].title)
    setNotesDescription(editNote[0].description)
    setEditId(id)
    
  };

  const renderNotes = (noteArray) => (
    noteArray.map((note) => (
      <div className="note-card" key={note.id}>
        <h2>{note.title}</h2>
        <p>{note.description}</p>
        <div className="note-buttons">
          <button onClick={() => deleteHandler(note.id)}>Delete</button>
          <button onClick={() => editHandler(note.id)}>Edit</button>
        </div>
      </div>
    ))
  );

  return (
    <div className="notes-container">
      {
        showingNote.length > 0
          ? renderNotes(showingNote)
          : (searchNote.length > 0
            ? <h3 className="no-match">Not Matching</h3>
            : renderNotes(notes)
          )
      }
    </div>
  );
}
