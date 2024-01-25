import React, { useRef } from "react";
import Button from "../ui/buttons/Button";
import Inputs from "../ui/inputs/Inputs";
import StyleForm from "../addNewMovieForm/StyleForm.module.css";
import styled from "styled-components";

const AddMovieForm = ({ movies, setMovies, setFiltredMovies }) => {
  const movieName = useRef(null);
  const movieLink = useRef(null);
  const movieGenre = useRef(null);

  const addMovies = () => {
    const movieRenderobj = {
      id: Math.random(),
      name: movieName.current.value,
      link: movieLink.current.value,
      genre: movieGenre.current.value,
    };
    setMovies([...movies, movieRenderobj]);
    setFiltredMovies([...movies, movieRenderobj]);
  };

  const filterMovieGenre = (genre) => {
    const updatedMovies = movies.filter((item) => item.genre === genre);
    setFiltredMovies(updatedMovies);
  };
  const showAllMovies = () => {
    setFiltredMovies(movies);
  };

  return (
    <div className={StyleForm.addMovieForm}>
      <div className={StyleForm.contentForm}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addMovies();
          }}
        >
          <Inputs
            type="text"
            text="Name Movie"
            value={movieName}
            // setData={setMovieName}
          />
          <Inputs
            type="text"
            text="Link"
            value={movieLink}
            // setData={setMovieLink}
          />
          <Inputs
            type="text"
            text="Genre"
            value={movieGenre}
            // setData={setMovieGenre}
          />

          <Button clName={"addButton"} type="submit" btnName="Добавить" />
        </form>
      </div>
      <div className={StyleForm.contentButton}>
        <Button
          clName={"btnGenre"}
          onClick={() => filterMovieGenre("ужас")}
          btnName="Ужас"
        />
        <Button
          clName={"btnGenre"}
          onClick={() => filterMovieGenre("комедия")}
          btnName="Комедия"
        />
        <Button
          clName={"btnGenre"}
          onClick={() => filterMovieGenre("фантастика")}
          btnName="фантастика"
        />
        <Button
          clName={"btnGenre"}
          onClick={() => filterMovieGenre("боевик")}
          btnName="Боевик"
        />
        <Button clName={"btnGenre"} onClick={showAllMovies} btnName="Все" />
      </div>
    </div>
  );
};

export default AddMovieForm;
