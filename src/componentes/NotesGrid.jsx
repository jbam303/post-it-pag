import React from 'react';
import Note from './Note';
import './styles/Notesgrid.css';

const NotesGrid = ({ notas, deleteNota }) => {
  return (
    <div className="container">
      <div className="row">
        {notas.map((nota, index) => (
          <div className="col-12 col-md-6 col-lg-3 mb-3" key={index}>
            <Note
              title={nota.title}
              description={nota.description}
              color={nota.color}
              onDelete={() => deleteNota(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesGrid;

