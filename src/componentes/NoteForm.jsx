import React, { useState } from 'react';
import './styles/NoteForm.css';

const NotaForm = ({ onAddNote}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#ffd700');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) {
      alert('La descripción es obligatoria.');
      return;
    }

    onAddNote({ title, description, color });
    setTitle('');
    setDescription('');
    setColor('#ffd700');
  };

  return (
    <form onSubmit={handleSubmit} className="nota-form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="nota-input"
      />
      <textarea
        placeholder="Descripción (obligatoria)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="nota-textarea"
      ></textarea>
      <label>
        Color de Nota:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="nota-color-picker"
        />
      </label>
      <button type="submit" className="btn btn-primary">Agregar Nota</button>
    </form>
  );
};

export default NotaForm;

