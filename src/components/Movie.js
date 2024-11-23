/**
 * Component to display a movie item.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.movie - The movie object.
 * @param {string} props.movie.imdbID - The IMDb ID of the movie.
 * @param {string} props.movie.Poster - The URL of the movie poster.
 * @param {string} props.movie.Title - The title of the movie.
 * @param {string} props.movie.Year - The release year of the movie.
 * @param {function} props.onSelectMovie - Callback function to handle movie selection.
 * @returns {JSX.Element} The rendered movie item component.
 */
function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
