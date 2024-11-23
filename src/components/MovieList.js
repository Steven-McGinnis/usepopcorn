/**
 * Component to render a list of movies.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.movies - The array of movie objects to display.
 * @param {Function} props.onSelectMovie - The callback function to handle movie selection.
 * @returns {JSX.Element} The rendered list of movies.
 */
import Movie from './Movie';

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className='list list-movies'>
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}

export default MovieList;
