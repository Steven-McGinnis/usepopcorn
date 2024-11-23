import React, { useEffect, useState } from 'react';
import StarRating from './StarRating';
import Loader from './Loader';

/**
 * MovieDetails component displays detailed information about a selected movie,
 * allows the user to rate the movie, and add it to the watched list.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.selectedId - The IMDb ID of the selected movie.
 * @param {function} props.onCloseMovie - Callback function to close the movie details view.
 * @param {function} props.onAddWatched - Callback function to add the movie to the watched list.
 * @param {Array} props.watched - List of watched movies.
 * @returns {JSX.Element} The rendered MovieDetails component.
 */
function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const KEY = '8a876b0e';
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState('');

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  /**
   * Handles the addition of a new watched movie.
   * Creates a new movie object with the selected movie details and user rating,
   * then calls the onAddWatched function to add the movie to the watched list
   * and closes the movie details view.
   *
   * @function handleAdd
   * @param {string} selectedId - The IMDb ID of the selected movie.
   * @param {string} title - The title of the selected movie.
   * @param {string} year - The release year of the selected movie.
   * @param {string} poster - The poster URL of the selected movie.
   * @param {string} imdbRating - The IMDb rating of the selected movie.
   * @param {string} runtime - The runtime of the selected movie.
   * @param {number} userRating - The user rating for the selected movie.
   * @param {function} onAddWatched - Callback function to add the movie to the watched list.
   * @param {function} onCloseMovie - Callback function to close the movie details view.
   */
  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(
    function () {
      function callback(e) {
        if (e.code === 'Escape') {
          onCloseMovie();
        }
      }
      document.addEventListener('keydown', callback);
      return function () {
        document.removeEventListener('keydown', callback);
      };
    },
    [onCloseMovie]
  );

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return function () {
      document.title = 'usePopcorn';
    };
  }, [title]);

  return (
    <div className='details'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button
              className='btn-back'
              onClick={onCloseMovie}>
              &larr;
            </button>
            <img
              src={poster}
              alt={`Poster of ${movie}`}
            />
            <div className='details-overview'>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className='rating'>
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className='btn-add'
                      onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}{' '}
                </>
              ) : (
                <p>
                  You rated this movie {watchedUserRating} <span>⭐'s</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
export default MovieDetails;
