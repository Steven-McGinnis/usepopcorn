/**
 * ErrorMessage component displays an error message with an icon.
 *
 * @param {Object} props - The component props.
 * @param {string} props.message - The error message to display.
 * @returns {JSX.Element} The rendered error message component.
 */
function ErrorMessage({ message }) {
  return (
    <p className='error'>
      <span>☢️</span>
      {message}
    </p>
  );
}

export default ErrorMessage;
