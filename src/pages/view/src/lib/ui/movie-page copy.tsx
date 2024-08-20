import React from 'react';
import useMoviePageLogic from '../logic/movie-page-logic';

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
      </div>

      <div className="max-w-full mx-auto bg-gray-900 p-4">
  {/*<!-- Video Container -->*/}
  <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden shadow-lg">
    <video
      className="absolute top-0 left-0 w-full h-full"
      controls
    >
      <source src="/home/Torrented/Moviz/12 Angry Men 1957 1080p BluRay x264 AAC - Ozlem/12 Angry Men 1957 1080p BluRay x264 AAC - Ozlem.mp4" type="video/mp4" />
      {/*<source src="movie.webm" type="video/webm" />*/}
      Your browser does not support the video tag.
    </video>
  </div>

  {/*<!-- Controls -->*/}
  <div className="flex justify-between items-center mt-4 text-white">
    {/*<!-- Language Selection -->*/}
    <div className="relative">
      <label htmlFor="language" className="mr-2">Language:</label>
      <select
        id="language"
        className="bg-gray-800 text-white py-2 px-3 rounded-lg shadow-md"
      >
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="german">German</option>
      </select>
    </div>

    {/*<!-- Subtitle Selection -->*/}
    <div className="relative">
      <label htmlFor="subtitles" className="mr-2">Subtitles:</label>
      <select
        id="subtitles"
        className="bg-gray-800 text-white py-2 px-3 rounded-lg shadow-md"
      >
        <option value="none">None</option>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="german">German</option>
      </select>
    </div>
  </div>
</div>
    </div>
  );
};

export default MoviePage;
