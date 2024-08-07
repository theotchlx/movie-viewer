import React from 'react';
import { Link } from 'react-router-dom';
import useViewPageFeature from '../feature/view-page-feature';

const ViewPage: React.FC = () => {
  const { movies } = useViewPageFeature();

  return (
    <div className="p-4">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">Movies</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/view/${movie.id}`}>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl">{movie.title}</h2>
              <p>{movie.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ViewPage;
