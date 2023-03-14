import React from "react";

function Card({ card, name, link, likes, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }  

  return (
    <div className="card">
      <img className="card__image" src={link} alt={name} onClick={handleClick}/>
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-container">
          <button className="card__like" type="button"></button>
          <p className="card__like-number">{likes.length}</p>
        </div>
        <button className="card__delete" type="button"></button>
      </div>
    </div>
  );
}

export default Card;
