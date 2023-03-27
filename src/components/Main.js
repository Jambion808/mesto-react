import React from "react";
// import api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onLikeClick,
  onDeleteClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            type="button"
            className="profile__avatar-button"
            onClick={onEditAvatar}
          >
            <img
              src={currentUser.avatar}
              alt="Аватар профиля"
              className="profile__avatar"
            />
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-content"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="element">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            link={card.link}
            name={card.name}
            likes={card.likes}
            onCardClick={onCardClick}
            onDeleteClick={onDeleteClick}
            onLikeClick={onLikeClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
