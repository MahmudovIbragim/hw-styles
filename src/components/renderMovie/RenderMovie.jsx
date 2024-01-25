import React, { useState } from "react";
import AddMovieForm from "../addNewMovieForm/AddMovieForm";
import CardRender from "../renderCard/CardRender";
import StyleRenderMovie from "../renderMovie/StyleRenderMovie.module.css";

const   RenderMovie = () => {
  const [movies, setMovies] = useState([]);
  const [filtredMovies, setFiltredMovies] = useState([]);

  return (
    <div className={StyleRenderMovie.sections}>
      <div className={StyleRenderMovie.section_1}>
        <AddMovieForm
          movies={movies}
          setMovies={setMovies}
          setFiltredMovies={setFiltredMovies}
        />
      </div>

      <div className={StyleRenderMovie.section_2}>
        <CardRender filtredMovies={filtredMovies} />
      </div>
    </div>
  );
};

export default RenderMovie;
