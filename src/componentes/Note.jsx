import React from 'react';
import './styles/pag.css';

const Note = ({ title, description }) => {
  return (
    <div className="note">
      {title && <h3>{title}</h3>}
      <p>{description}</p>
    </div>
  );
};

export default Note;
