import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <div className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button className="card__like" type="button"></button>
          <p className="card__like-number">{props.card.likes.length}</p>
        </div>
        <button className="card__delete" type="button"></button>
      </div>
    </div>
  );
}

export default Card;
