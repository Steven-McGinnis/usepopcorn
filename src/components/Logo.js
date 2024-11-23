/**
 * Logo component that displays a popcorn emoji and the title "usePopcorn".
 *
 * @component
 * @example
 * return (
 *   <Logo />
 * )
 */
function Logo() {
  return (
    <div className='logo'>
      <span role='img'>🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

export default Logo;
