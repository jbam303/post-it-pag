import React from 'react';
import Note from './Note';
import './styles/Notesgrid.css';

const NotesGrid = ({ notes }) => {
  return (
    <div className="notes-grid">
      {notes.map((note, index) => (
        <Note key={index} title={note.title} description={note.description} />
      ))}
    </div>
  );
};

export default NotesGrid;
