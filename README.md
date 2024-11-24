# usePopcorn 🍿

usePopcorn is a React application that enables users to search for movies, view details, and manage a list of watched movies. This project is part of Jonas Schmedtmann's Udemy course, Master Modern React from Beginner to Advanced! It serves as a hands-on opportunity to deepen my understanding of React concepts while working with a real-world API.

## 📖 About This Project

usePopcorn is a feature-rich movie application that interacts with the OMDB API to fetch movie data. It allows users to:

- Search for movies and display results dynamically.
- View detailed information about a selected movie.
- Add movies to a watched list and manage ratings.

This project helped reinforce foundational and intermediate React concepts through practical application.

## ✨ Features

- **Search for Movies**: Search the OMDB API for movie titles and display relevant results.
- **Detailed Movie Information**: View details like plot, actors, and poster for selected movies.
- **Watched Movies Management**: Track movies you've watched and add personal ratings.

## 🎓 Concepts Practiced

While developing usePopcorn, I gained hands-on experience with:

- Custom hooks for data fetching and API integration.
- Component hierarchy and reusability.
- State management with `useState`.
- Conditional rendering and error handling.
- Enhancing UX with loading indicators and error messages.

## 🛠️ How to Run

To run the app locally:

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/usepopcorn.git
   ```

2. Navigate to the project directory:
   ```sh
   cd usepopcorn
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

The app will be accessible at [http://localhost:3000](http://localhost:3000).

## 🧩 Components

- **App.js**: Main application component managing state, interactions, and layout.
- **NavBar.js**: Navigation bar with a search input and result counter.
- **MovieList.js**: Displays a list of search results.
- **MovieDetails.js**: Shows detailed information about a selected movie and allows user interactions like rating and adding to the watched list.
- **Movie.js**: A single movie item display component.
- **Main.js**: Wraps children in a semantic `<main>` container.
- **Logo.js**: Displays a popcorn emoji and the app title.
- **Loader.js**: Renders a loading message during data fetches.
- **ErrorMessage.js**: Shows an error message with an icon if something goes wrong.
- **Box.js**: A container component with toggleable visibility.
- **WatchedMoviesList.js**: Displays the list of movies added to the watched list.
- **WatchedSummary.js**: Summarizes the user's watched movies.
- **NumResults.js**: Displays the number of search results found.

## 🔧 Custom Hooks

- **useMovies.js**: Fetches movies from the OMDB API based on a user query.

## 🚀 Future Improvements

While the current version is fully functional, potential enhancements include:

- Adding persistent data storage with `localStorage` or an API backend.
- Implementing advanced search features like filters for genres or release years.
- Upgrading styling with Tailwind CSS for a modern design.

## 🙏 Acknowledgments

A big thank you to Jonas Schmedtmann for designing an engaging and practical React course that bridges foundational learning with real-world applications.
