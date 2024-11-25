import React, { useState } from 'react';
import './styles/pag.css';

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
    <form className="note-form container mt-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Título</label>
        <input
          id="title"
          className="form-control"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título opcional"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Descripción</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción (obligatoria)"
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">Agregar Nota</button>
    </form>
  );
};


export default NoteForm;
