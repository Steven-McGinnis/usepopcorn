import Search from './Search';
import Logo from './Logo';

/**
 * NavBar component renders a navigation bar with a logo, search input, and additional children components.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the navigation bar.
 * @param {string} props.query - The current search query.
 * @param {function} props.setQuery - The function to update the search query.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
function NavBar({ children, query, setQuery }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      <Search
        query={query}
        setQuery={setQuery}
      />
      {children}
    </nav>
  );
}

export default NavBar;
