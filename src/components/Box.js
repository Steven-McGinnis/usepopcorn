import { useState } from 'react';

/**
 * A Box component that can toggle its visibility.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the box.
 * @returns {JSX.Element} The rendered Box component.
 */
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
