import { useEffect, useState } from 'react';
import Movie from '@/interfaces/movie';

const useViewPageLogic = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch movies from an API or use dummy data
    const api_movies = [
      {
        id: 1,
        title: 'Movie 1',
        category: 'Action',
        description: 'This is a detailed description of the movie.',
      },
      {
        id: 2,
        title: 'Movie 2',
        category: 'Action',
        description: 'LOREM IPSUM DOLOR SIT AMET CONESCTETUR ADIPISCING ELIT.',
      },
      {
        id: 3,
        title: 'Movie 3',
        category: 'Action',
        description: 'This is a detailed description of the movie.',
      },
      {
        id: 4,
        title: 'Movie 4',
        category: 'Action',
        description: 'This is a detailed description of the movie.',
      },
      {
        id: 5,
        title: 'Movie 5',
        category: 'Action',
        description: 'This is a detailed description of the movie.',
      },
      {
        id: 6,
        title: 'Movie 6',
        category: 'Action',
        description: 'This is a detailed description of the movie.',
      },
      {
        id: 7,
        title: 'Movie 7',
        category: 'Action',
        description: 'what the fuck broooo what r u lookin aatttt',
      },
      {
        id: 8,
        title: 'Movie 8',
        category: 'Action',
        description: 'This is a detailed description of the movie.',
      },
      {
        id: 9,
        title: 'Movie 9',
        category: 'Action',
        description: 'This is a detailed description of the movie.',
      },
      {
        id: 10,
        title: 'Movie 10',
        category: 'Action',
        description: 'This is a detailed description of the movie.',
      },
    ]
    setMovies(api_movies);
  }, []);

  return {
    movies,
  };
};

export default useViewPageLogic;
