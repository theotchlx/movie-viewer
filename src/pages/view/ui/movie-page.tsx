import React from 'react';
import useMoviePageFeature from '../feature/movie-page-feature';

const MoviePage: React.FC = () => {
  const { movie } = useMoviePageFeature();

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
