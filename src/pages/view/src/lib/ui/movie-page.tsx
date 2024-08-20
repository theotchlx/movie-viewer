import React from 'react';
import useMoviePageLogic from '../logic/movie-page-logic';
import amovie from 'movie/path.mp4'
import { Button } from '@/components/ui/button';

const MoviePage: React.FC = () => {
  const { movie } = useMoviePageLogic();

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <p className="mt-2 text-sm text-gray-600">{movie.category}</p>
        <p className="mt-4">{movie.description}</p>

        <video className="w-full" controls>
          <source src={amovie} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='flex justify-center'>
        <Button>
          Download
        </Button>
      </div>
    </div>
  );
};

export default MoviePage;
