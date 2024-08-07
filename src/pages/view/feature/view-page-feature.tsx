import { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  category: string;
}

const useViewPageFeature = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch movies from an API or use dummy data
    setMovies([
      { id: 1, title: 'Movie 1', category: 'Action' },
      { id: 2, title: 'Movie 2', category: 'Drama' },
      // more movies
    ]);
  }, []);

  return {
    movies,
  };
};

export default useViewPageFeature;
