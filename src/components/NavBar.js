import Search from './Search';
import Logo from './Logo';

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
