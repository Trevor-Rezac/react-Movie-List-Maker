import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, deleteMovie }) {
//   console.log('||', deleteMovie);
  return <div className='movie-list'>
    {movies.map((movie, i) => <MovieItem key={`${movie}-${i}`} {...movie} deleteMovie={deleteMovie} />)}
  </div>;
}
