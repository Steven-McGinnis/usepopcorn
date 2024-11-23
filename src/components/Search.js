/**
 * Search component renders an input field for searching movies.
 *
 * @param {Object} props - The component props.
 * @param {string} props.query - The current search query.
 * @param {function} props.setQuery - Function to update the search query.
 * @returns {JSX.Element} The rendered input field.
 */
function Search({ query, setQuery }) {
  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
