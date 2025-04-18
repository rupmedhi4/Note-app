import React, { useContext, useState } from 'react';
import Button from '../../UI/Button';
import './Notes.css';
import { Context } from '../../Context/Context';

export default function Notes() {
    const {
        isOpenModal, setIsOpenModal,
        notes, setNotes, notesTitle,
        setNotesTitle, notesDescription,
        setNotesDescription,
        editId, setEditId
    } = useContext(Context)

    const addNotesHandler = (e) => {
        e.preventDefault()
        if (editId) {
            const updatedNotes = notes.map((note) =>
                note.id === editId
                    ? { ...note, title: notesTitle, description: notesDescription }
                    : note
            );
            setNotes(updatedNotes);
        } else {
            setNotes((notes) => {
                return [...notes, {
                    title: notesTitle,
                    description: notesDescription,
                    id: Math.random()
                }]
            })
        }

        setIsOpenModal(!isOpenModal)
        setNotesTitle("")
        setNotesDescription("")
        setEditId(null)

    }

    const closeBtnHandler = () => {
        setIsOpenModal(!isOpenModal)
        setNotesTitle("")
        setNotesDescription("")
        setEditId(null)
    }


    return (
        <form onSubmit={addNotesHandler} className="notes-form">
            <div className="form-group">
                <label htmlFor="noteTitle">Note Title</label>
                <input
                    type="text"
                    id="noteTitle"
                    value={notesTitle}
                    onChange={(e) => setNotesTitle(e.target.value)}
                    placeholder="Enter note title"
                />
            </div>
            <div className="form-group">
                <label htmlFor="noteDescription">Note Description</label>
                <textarea
                    id="noteDescription"
                    value={notesDescription}
                    onChange={(e) => setNotesDescription(e.target.value)}
                    placeholder="Enter note description"
                    rows="4"
                />
            </div>

            <div className="button-group">
                <Button type="submit">{editId !== null ? "Update Note" : "Add to Note"}</Button>
                <Button onClick={closeBtnHandler}>Close</Button>
            </div>
        </form>
    );
}
