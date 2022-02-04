import React from 'react';

export default function MovieItem({ 
  color,
  title,
  director,
  year,
  genre,
  deleteMovie
}) {
  console.log('||', deleteMovie);
  return <div 
    onClick={() => deleteMovie ? deleteMovie(title) : null}
    className='movie-item' 
    style={{ backgroundColor: color }}>

    <h3>{title}</h3>
    <p>Director: {director}</p>
    <p>Released: {year}</p>
    <p>Genre: {genre}</p>
  </div>;
}
