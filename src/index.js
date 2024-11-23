import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating
      size={24}
      maxRating={15}
      color='red'
      className='test'
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);

function Test() {
  const [movieRating, setMovieRating] = React.useState(0);
  return (
    <div>
      <StarRating
        maxRating={'5'}
        onSetRating={setMovieRating}
        messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      />
      <p>Movie rating: {movieRating}</p>
    </div>
  );
}
