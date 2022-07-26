import React from "react";
import { Movie as MovieType } from "../types/Movie";

import classes from "./Movie.module.css";

const Movie = ({ title, releaseDate, openingText }: MovieType) => {
  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default Movie;
