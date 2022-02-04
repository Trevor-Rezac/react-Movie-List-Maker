import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';

function App() {
  const [titleForm, setTitleForm] = useState('');
  const [directorForm, setDirectorForm] = useState('');
  const [yearForm, setYearForm] = useState('');
  const [genreForm, setGenreForm] = useState('');
  const [colorForm, setColorForm] = useState('lightcoral');
  const [allMovies, setAllMovies] = useState([]);

  // console.log('||', titleForm, directorForm, yearForm, genreForm, colorForm);
  // console.log('||', allMovies);

  function addMovie(newMovie) {
    const updatedMovies = [...allMovies, newMovie];

    setAllMovies(updatedMovies);
  }

  return (
    <div className="App">
      <div className='current-movie-container'>
        <MovieForm 
          titleForm={titleForm} 
          setTitleForm={setTitleForm} 
          directorForm={directorForm} 
          setDirectorForm={setDirectorForm} 
          yearForm={yearForm} setYearForm={setYearForm} 
          genreForm={genreForm} setGenreForm={setGenreForm} 
          colorForm={colorForm} setColorForm={setColorForm} 
          addMovie={addMovie}/>
        {}
        <div className='movie-item' style={{ backgroundColor: colorForm }}>
          <h3>{titleForm}</h3>
          <p>Director: {directorForm}</p>
          <p>Released: {yearForm}</p>
          <p>Genre: {genreForm}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
