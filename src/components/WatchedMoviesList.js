import WatchedMovie from './WatchedMovie';

/**
 * Component to render a list of watched movies.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.watched - An array of watched movie objects.
 * @param {Function} props.onDeleteWatched - Callback function to handle the deletion of a watched movie.
 * @returns {JSX.Element} The rendered list of watched movies.
 */
function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
