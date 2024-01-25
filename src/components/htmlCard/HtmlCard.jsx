import React from "react";
import HtmlStyleCard from "../htmlCard/HtmlStyleCard.module.css";

const HtmlCard = ({ name, link, genre }) => {
  return (
    <div className={HtmlStyleCard.contentCard}>
      <img src={link} alt="" />
      <h2>{name}</h2>
      <p>{genre}</p>
    </div>
  );
};

export default HtmlCard;
