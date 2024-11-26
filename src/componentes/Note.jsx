import React from 'react';
import './styles/Note.css';

const Note = ({ title, description, color, onDelete }) => {
  return (
    <div className="nota" style={{ backgroundColor: color }}>
      <div className="nota-title"><h4>{title || 'Sin Título'}</h4></div>
      <div className="nota-content"><p>{description}</p></div>
      <button className="btn btn-danger btn-sm mt-2" onClick={onDelete}>
        Eliminar
      </button>
    </div>
  );
};

export default Note;

