import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';

function App() {
  const [titleForm, setTitleForm] = useState('');
  const [directorForm, setDirectorForm] = useState('');
  const [yearForm, setYearForm] = useState('');
  const [genreForm, setGenreForm] = useState('');

  console.log('||', titleForm, directorForm, yearForm, genreForm);

  return (
    <div className="App">
      <form>
        Add a movie!
        <label>
          Title
          <input required value={titleForm} onChange={e => setTitleForm(e.target.value)}></input>
        </label>
        <label>
          Director
          <input required value={directorForm} onChange={e => setDirectorForm(e.target.value)}></input>
        </label>
        <label>
          Year
          <input required value={yearForm} onChange={e => setYearForm(e.target.value)}></input>
        </label>
        <label>
          Genre
          <input required value={genreForm} onChange={e => setGenreForm(e.target.value)}></input>
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}

export default App;
