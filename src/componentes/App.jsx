import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NotesGrid from './NotesGrid';
import './styles/App.css';

const App = () => {
  const [notas, setNotas] = useState([]);

  const addNota = (nota) => {
    setNotas([...notas, nota]);
  };

  return (
    <div className="app">
      <header>
        <h1>Post-it Notes</h1>
      </header>
      <main>
        <NoteForm onAddNote={addNota} />
        <NotesGrid notes={notas} />
      </main>
    </div>
  );
};

export default App;
