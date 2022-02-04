import React from 'react';

export default function MovieForm({ 
  titleForm, 
  setTitleForm, 
  directorForm, 
  setDirectorForm, 
  yearForm, 
  setYearForm, 
  genreForm, 
  setGenreForm, 
  colorForm, 
  setColorForm, 
  addMovie }) {
  
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

  return <div className='form-container'>
    
    <form onSubmit={handleSubmit}>
          Add a movie!
      <input required placeholder='Title' value={titleForm} onChange={e => setTitleForm(e.target.value)} ></input>

      <input required placeholder='Director' value={directorForm} onChange={e => setDirectorForm(e.target.value)}></input>

      <input required placeholder='Year' value={yearForm} onChange={e => setYearForm(e.target.value)}></input>

      <input required placeholder='Genre' value={genreForm} onChange={e => setGenreForm(e.target.value)}></input>

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
      
  </div>;
}
