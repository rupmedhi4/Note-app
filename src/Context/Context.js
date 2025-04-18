import React, { createContext, useEffect, useState } from 'react';

// Context create
export const Context = createContext();

// Provider
export const ContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState('');
  const [showingNote, setShowingNote] = useState('');
  const [notesTitle, setNotesTitle] = useState("");
  const [notesDescription, setNotesDescription] = useState("");
  const [editId, setEditId] = useState(null);



  useEffect(() => {
    if (searchNote.length > 0) {
      const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchNote.toLowerCase()) ||
        note.description.toLowerCase().includes(searchNote.toLowerCase())
      );
      setShowingNote(filteredNotes);
    } else {
      setShowingNote([]);
    }
  }, [searchNote, notes]);
  



  return (
    <Context.Provider
      value={{
        isOpenModal, setIsOpenModal,
        notes, setNotes,
        searchNote, setSearchNote,
        showingNote, setShowingNote,
        notesTitle, setNotesTitle,
        notesDescription, setNotesDescription,
        editId, setEditId
      }}
    >
      {children}
    </Context.Provider>
  );
};
