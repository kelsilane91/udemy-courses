import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { Movie } from "./types/Movie";

function App() {
  const dummyMovies: Movie[] = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  return (
    <>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </>
  );
}

export default App;
