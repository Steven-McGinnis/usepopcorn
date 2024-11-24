Steven-McGinnis: Create a markdown readme for this project

Create a README file for the project that includes an overview, installation instructions, usage, and a brief description of each component.

````markdown
# usePopcorn

usePopcorn is a React application that allows users to search for movies, view details, and manage a list of watched movies. It uses the OMDB API to fetch movie data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Custom Hooks](#custom-hooks)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/usepopcorn.git
   ```
````

2. Navigate to the project directory:
   ```sh
   cd usepopcorn
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### `App.js`

The main application component that handles fetching and displaying movies, managing the watched movies list, and handling user interactions.

### `NavBar.js`

A navigation bar component that includes a search input and displays the number of search results.

### `MovieList.js`

A component to render a list of movies.

### `MovieDetails.js`

A component that displays detailed information about a selected movie, allows the user to rate the movie, and add it to the watched list.

### `Movie.js`

A component to display a movie item.

### `Main.js`

A component that wraps its children with a `<main>` HTML element.

### `Logo.js`

A component that displays a popcorn emoji and the title "usePopcorn".

### `Loader.js`

A component that displays a loading message.

### `ErrorMessage.js`

A component that displays an error message with an icon.

### `Box.js`

A component that can toggle its visibility.

### `WatchedMoviesList.js`

A component that displays a list of watched movies.

### `WatchedSummary.js`

A component that displays a summary of watched movies.

### `NumResults.js`

A component that displays the number of search results.

## Custom Hooks

### `useMovies.js`

A custom hook to fetch movies based on a search query.

## License

This project is licensed under the MIT License.

````


Steven-McGinnis: write it into this existing readme

GitHub Copilot: ### [README.md](file:///Users/proje/Desktop/usepopcorn/README.md)

Integrate the new content into the existing README file.

```markdown
# usePopcorn

usePopcorn is a React application that allows users to search for movies, view details, and manage a list of watched movies. It uses the OMDB API to fetch movie data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Custom Hooks](#custom-hooks)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/usepopcorn.git
````

2. Navigate to the project directory:
   ```sh
   cd usepopcorn
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### `App.js`

The main application component that handles fetching and displaying movies, managing the watched movies list, and handling user interactions.

### `NavBar.js`

A navigation bar component that includes a search input and displays the number of search results.

### `MovieList.js`

A component to render a list of movies.

### `MovieDetails.js`

A component that displays detailed information about a selected movie, allows the user to rate the movie, and add it to the watched list.

### `Movie.js`

A component to display a movie item.

### `Main.js`

A component that wraps its children with a `<main>` HTML element.

### `Logo.js`

A component that displays a popcorn emoji and the title "usePopcorn".

### `Loader.js`

A component that displays a loading message.

### `ErrorMessage.js`

A component that displays an error message with an icon.

### `Box.js`

A component that can toggle its visibility.

### `WatchedMoviesList.js`

A component that displays a list of watched movies.

### `WatchedSummary.js`

A component that displays a summary of watched movies.

### `NumResults.js`

A component that displays the number of search results.

## Custom Hooks

### `useMovies.js`

A custom hook to fetch movies based on a search query.

## License

This project is licensed under the MIT License.

```

```
