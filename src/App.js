import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';
import MovieItem from './MovieItem';
import MovieList from './MovieList';

function App() {
  const [titleForm, setTitleForm] = useState('');
  const [directorForm, setDirectorForm] = useState('');
  const [yearForm, setYearForm] = useState('');
  const [genreForm, setGenreForm] = useState('');
  const [colorForm, setColorForm] = useState('lightcoral');
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // console.log('||', titleForm, directorForm, yearForm, genreForm, colorForm);
  // console.log('||', allMovies);

  function addMovie(newMovie) {
    const updatedMovies = [...allMovies, newMovie];

    setAllMovies(updatedMovies);
  }

  function filterMovies(query) {
    const filteredMovies = allMovies.filter(movie => movie.title.includes(query));

    if (query) {
      setFilteredMovies(filteredMovies);
    } else {
      setFilteredMovies([]);
    }
    
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

        {titleForm && <MovieItem 
          title={titleForm}
          director={directorForm}
          year={yearForm}
          genre={genreForm}
          color={colorForm} />}
      </div>
      <div className='movie-list-container'>
        <h2>Movie List</h2>
        <input placeholder='Filter Movies' onChange={(e) => filterMovies(e.target.value)}/>
        <MovieList movies={filteredMovies.length ? filteredMovies : allMovies} />
      </div>
    </div>
  );
}

export default App;
