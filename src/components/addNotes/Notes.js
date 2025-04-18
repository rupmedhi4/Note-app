import React, { useState } from 'react';
import Button from '../../UI/Button';
import './Notes.css'; 

export default function Notes() {
    const [notesTitle, setNotesTitle] = useState("");
    const [notesDescription, setNotesDescription] = useState("");

    return (
        <form className="notes-form">
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
                <Button>Add to Note</Button>
                <Button>Close</Button>
            </div>
        </form>
    );
}
