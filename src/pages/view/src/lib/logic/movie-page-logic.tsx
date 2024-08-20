import Movie from '@/interfaces/movie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useMoviePageLogic = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    // Fetch movie details from an API or use dummy data
    setMovie({
      id: parseInt(movieId || '0', 10),
      title: `Movie ${movieId}`,
      category: 'Action',
      description: 'This is a detailed description of the movie.',
    });
  }, [movieId]);

  return {
    movie,
  };
};

export default useMoviePageLogic;
