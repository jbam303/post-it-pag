import React from 'react';
import Note from './Note';

const NotesGrid = ({ notes }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {notes.map((note, index) => (
          <div className="col-12 col-md-6 col-lg-3 mb-3" key={index}>
            <Note title={note.title} description={note.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesGrid;
