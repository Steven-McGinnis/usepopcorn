import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import NavBar from './components/NavBar';
import WatchedMoviesList from './components/WatchedMoviesList';
import WatchedSummary from './components/WatchedSummary';
import MovieList from './components/MovieList';
import Box from './components/Box';
import Main from './components/Main';
import NumResults from './components/NumResults';
import MovieDetails from './components/MovieDetails';
import { useMovies } from './useMovies';

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

/**
 * The main application component that handles fetching and displaying movies,
 * managing the watched movies list, and handling user interactions.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * // Usage example:
 * import App from './App';
 *
 * function Main() {
 *   return <App />;
 * }
 *
 * @typedef {Object} Movie
 * @property {string} imdbID - The IMDb ID of the movie.
 * @property {string} Title - The title of the movie.
 * @property {string} Year - The release year of the movie.
 * @property {string} Poster - The URL of the movie poster.
 *
 * @typedef {Object} Error
 * @property {string} message - The error message.
 *
 * @typedef {Object} NavBarProps
 * @property {string} query - The search query.
 * @property {function} setQuery - Function to update the search query.
 *
 * @typedef {Object} MovieDetailsProps
 * @property {string} selectedId - The ID of the selected movie.
 * @property {function} onCloseMovie - Function to close the movie details.
 * @property {function} onAddWatched - Function to add a movie to the watched list.
 * @property {Movie[]} watched - The list of watched movies.
 *
 * @typedef {Object} WatchedMoviesListProps
 * @property {Movie[]} watched - The list of watched movies.
 * @property {function} onDeleteWatched - Function to delete a movie from the watched list.
 *
 * @typedef {Object} UseMoviesResult
 * @property {Movie[]} movies - The list of movies fetched based on the query.
 * @property {boolean} loading - The loading state of the fetch operation.
 * @property {Error|null} error - The error object if an error occurred, otherwise null.
 */
export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('');

  /**
   * Custom hook to fetch movies based on a search query.
   * @function
   * @param {string} query - The search query to fetch movies.
   * @param {function} handleCloseMovie - Function to handle closing the movie details.
   * @returns {UseMoviesResult} The result of the fetch operation.
   */
  const { movies, loading, error } = useMovies(query, handleCloseMovie);

  /**
   * State hook to manage the list of watched items.
   * Initializes the state with the value stored in localStorage under the key 'watched'.
   * If no value is found in localStorage, initializes with an empty array.
   *
   * @returns {Array} The initial state value for the watched items.
   */
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem('watched');
    return storedValue ? JSON.parse(storedValue) : [];
  });

  /**
   * Handles the selection of a movie by its ID.
   * If the selected movie ID is the same as the current selected ID, it deselects the movie.
   * Otherwise, it sets the selected ID to the provided movie ID.
   *
   * @param {number} id - The ID of the movie to select.
   */
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  /**
   * Handles the closing of a movie by setting the selected movie ID to null.
   */
  function handleCloseMovie() {
    setSelectedId(null);
  }

  /**
   * Adds a movie to the watched list.
   *
   * @param {Object} movie - The movie object to add to the watched list.
   */
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  /**
   * Handles the deletion of a watched movie by its ID.
   *
   * @param {string} id - The IMDb ID of the movie to be deleted.
   */
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  /**
   * Updates the watched list in localStorage whenever the watched state changes.
   * This effect runs whenever the watched state changes.
   * It updates the watched list in localStorage with the new watched state.
   * @function
   * @param {Array} watched - The watched list to store in localStorage.
   * @returns {undefined}
   */
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched));
  }, [watched]);

  return (
    <>
      <NavBar
        query={query}
        setQuery={setQuery}>
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {loading && <Loader />}
          {!loading && error && <ErrorMessage message={error} />}
          {!loading && !error && (
            <MovieList
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          )}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
