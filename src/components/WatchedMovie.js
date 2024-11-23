/**
 * Component to display a watched movie with details and a delete button.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.movie - Movie object containing details.
 * @param {string} props.movie.poster - URL of the movie poster.
 * @param {string} props.movie.title - Title of the movie.
 * @param {number} props.movie.imdbRating - IMDb rating of the movie.
 * @param {number} props.movie.userRating - User rating of the movie.
 * @param {number} props.movie.runtime - Runtime of the movie in minutes.
 * @param {string} props.movie.imdbID - IMDb ID of the movie.
 * @param {Function} props.onDeleteWatched - Function to call when the delete button is clicked.
 * @returns {JSX.Element} The WatchedMovie component.
 */
function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
      />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className='btn-delete'
          onClick={() => onDeleteWatched(movie.imdbID)}>
          X
        </button>
      </div>
    </li>
  );
}

export default WatchedMovie;
