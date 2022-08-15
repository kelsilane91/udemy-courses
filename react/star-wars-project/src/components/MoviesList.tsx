import React from "react";
import { Movie as MovieType } from "../types/Movie";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

type Props = {
  movies: MovieType[];
};
const MovieList = ({ movies }: Props) => {
  console.log(movies);
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
