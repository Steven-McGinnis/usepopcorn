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

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = '8a876b0e';

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
 */
export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('');

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

    // localStorage.setItem('watched', JSON.stringify([...watched, movie]));
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

  useEffect(
    /**
     * Fetches movies based on the search query.
     * If the query is less than 3 characters, it clears the movie list.
     * If the fetch is successful, it sets the movies state with the fetched data.
     * If there is an error, it sets the error state with the error message.
     * Finally, it sets the loading state to false.
     *
     * @async
     * @function
     * @param {string} query - The search query to fetch movies for
     * @returns {function} The cleanup function to abort the fetch request.
     */
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setLoading(true);
          setError('');
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error('Something went wrong with fetching movies');
          const data = await res.json();
          if (data.Response === 'False') throw new Error(data.Error);
          setMovies(data.Search);
          setError('');
        } catch (error) {
          if (error.name !== 'AbortError') setError(error.message);
        } finally {
          setLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError('');
        return;
      }

      handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

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
