import React, { useState } from 'react';
import './styles/NoteForm.css';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) {
      alert('La descripción es obligatoria.');
      return;
    }
    onAddNote({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Título "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción (obligatoria)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit" className="btn btn-primary">Agregar Nota</button>
    </form>
  );
};

export default NoteForm;
