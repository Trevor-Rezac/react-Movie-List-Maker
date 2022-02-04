import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';

function App() {
  const [titleForm, setTitleForm] = useState('');
  const [directorForm, setDirectorForm] = useState('');
  const [yearForm, setYearForm] = useState('');
  const [genreForm, setGenreForm] = useState('');
  const [colorForm, setColorForm] = useState('');
  const [allMovies, setAllMovies] = useState([]);

  // console.log('||', titleForm, directorForm, yearForm, genreForm, colorForm);
  console.log('||', allMovies);

  function handleSubmit(e) {
    e.preventDefault();

    const movie = {
      title: titleForm,
      director: directorForm,
      year: yearForm,
      genre: genreForm,
      color: colorForm
    };

    addMovie(movie);

    setTitleForm('');
    setDirectorForm('');
    setYearForm('');
    setGenreForm('');
    setColorForm('lightcoral');
  }

  function addMovie(newMovie) {
    const updatedMovies = [...allMovies, newMovie];

    setAllMovies(updatedMovies);
  }

  return (
    <div className="App">
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
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
          <label>
            Poster Color
            <select value={colorForm} onChange={e => setColorForm(e.target.value)}>
              <option value='lightcoral'>Red</option>
              <option value='lightsalmon'>Orange</option>
              <option value='lightyellow'>Yellow</option>
              <option value='lightgreen'>Green</option>
              <option value='lightblue'>Blue</option>
              <option value='purple'>Purple</option>
            </select>
          </label>
          <button>Add Movie</button>
        </form>
      </div>
    </div>
  );
}

export default App;
