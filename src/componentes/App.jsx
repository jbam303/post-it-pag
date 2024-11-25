import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NotesGrid from './NotesGrid';
import './styles/pag.css';

const App = () => {
  const [notas, setNotas] = useState([]);

  const addNota = (nota) => {
    setNotas([...notas, nota]);
  };

  return (
    <div className="app">
      <header>
        <h1>Post it</h1>
      </header>
      <main>
        <NoteForm onAddNote={addNota} />
        <NotesGrid notes={notas} />
      </main>
    </div>
  );
};

document.querySelectorAll('.Note').forEach(nota => {
  const colores = ['#ffd700', '#87CEFA', '#98FB98', '#FFB6C1'];
  const randomColor = colores[Math.floor(Math.random() * colores.length)];
  nota.style.background = randomColor;
});

export default App;
