/**
 * Main component that wraps its children with a <main> HTML element.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the main element.
 * @returns {JSX.Element} The rendered main element with children.
 */
function Main({ children }) {
  return <main className='main'>{children}</main>;
}

export default Main;
