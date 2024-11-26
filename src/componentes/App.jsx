import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NotesGrid from './NotesGrid';
import './styles/App.css';

const App = () => {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const savedNotas = JSON.parse(localStorage.getItem('notas')) || [];
    setNotas(savedNotas);
  }, []);

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const addNota = (nota) => {
    setNotas([...notas, nota]);
  };

  const deleteNota = (indexToRemove) => {
    const updatedNotas = notas.filter((_, index) => index !== indexToRemove);
    setNotas(updatedNotas);
  };

  return (
    <div className="app">
      <header>
        <h1>Post-it Notas</h1>
      </header>
      <main>
        <NoteForm onAddNote={addNota} />
        <NotesGrid notas={notas} deleteNota={deleteNota} />
      </main>
    </div>
  );
};

export default App;
