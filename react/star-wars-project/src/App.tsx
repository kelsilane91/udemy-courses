import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { Movie } from "./types/Movie";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://udemy-react-7090f-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Error fetching movies");
      }
      const data = await response.json();

      const loadedMovies: Movie[] = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].opening_crawl,
          releaseDate: data[key].release_date,
        });
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError((error as Error).message);
    }
    setIsLoading(false);
  };

  const addMovieHandler = async (movie: Movie) => {
    const response = await fetch(
      "https://udemy-react-7090f-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  };

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loading!</p>}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
    </>
  );
}

export default App;
