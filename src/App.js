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

  console.log('||', titleForm, directorForm, yearForm, genreForm, colorForm);
  console.log('||', allMovies);

  function addMovie(newMovie) {
    const updatedMovies = [...allMovies, newMovie];

    setAllMovies(updatedMovies);
  }

  return (
    <div className="App">
      <MovieForm 
        titleForm={titleForm} 
        setTitleForm={setTitleForm} 
        directorForm={directorForm} 
        setDirectorForm={setDirectorForm} 
        yearForm={yearForm} setYearForm={setYearForm} 
        genreForm={genreForm} setGenreForm={setGenreForm} 
        colorForm={colorForm} setColorForm={setColorForm} 
        addMovie={addMovie}/>
    </div>
  );
}

export default App;
