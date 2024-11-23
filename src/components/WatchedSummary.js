import { average } from '../App';

/**
 * Component to display a summary of watched movies.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.watched - Array of watched movies.
 * @param {number} props.watched[].imdbRating - The IMDb rating of the movie.
 * @param {number} props.watched[].userRating - The user rating of the movie.
 * @param {number} props.watched[].runtime - The runtime of the movie in minutes.
 * @returns {JSX.Element} The WatchedSummary component.
 */
function WatchedSummary({ watched }) {
  const avgImdbRating = average(
    watched.map((movie) => movie.imdbRating)
  ).toFixed(1);
  const avgUserRating = average(
    watched.map((movie) => movie.userRating)
  ).toFixed(1);
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
