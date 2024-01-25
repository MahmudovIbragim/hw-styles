import React from "react";
import HtmlCard from "../htmlCard/HtmlCard";
import CardStyleRender from '../renderCard/CardStyleRender.module.css'

const CardRender = ({ filtredMovies }) => {
  return (
    <div className={CardStyleRender.rendering}>
      {filtredMovies.map(({ id, name, link, genre }) => {
        return <HtmlCard key={id} name={name} link={link} genre={genre} />;
      })}
    </div>
  );
};

export default CardRender;
