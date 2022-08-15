import React, { BaseSyntheticEvent, useRef } from "react";
import { Movie } from "../types/Movie";

import classes from "./AddMovie.module.css";

type Props = {
  onAddMovie: (movie: Movie) => void;
};
function AddMovie({ onAddMovie }: Props) {
  const titleRef = useRef<any>("");
  const openingTextRef = useRef<any>("");
  const releaseDateRef = useRef<any>("");

  function submitHandler(event: BaseSyntheticEvent) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
