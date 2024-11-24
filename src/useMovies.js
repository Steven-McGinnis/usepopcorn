import { useEffect, useState } from 'react';

const KEY = '8a876b0e';
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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
      callback?.();
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

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, loading, error };
}
