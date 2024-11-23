/**
 * Component to display the number of movie results.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.movies - The array of movie objects.
 * @returns {JSX.Element} The JSX element displaying the number of results.
 */
function NumResults({ movies }) {
  return (
    <p className='num-results'>
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default NumResults;
