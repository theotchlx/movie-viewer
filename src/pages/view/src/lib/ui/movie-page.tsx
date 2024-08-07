import React from 'react';
import useMoviePageLogic from '../logic/movie-page-logic';

const MoviePage: React.FC = () => {
  const { movie } = useMoviePageLogic();

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p className="mt-2 text-sm text-gray-600">{movie.category}</p>
      <p className="mt-4">{movie.description}</p>
    </div>
  );
};

export default MoviePage;
