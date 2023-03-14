import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
      Promise.all([api.getInfoAboutUser(), api.getCardsUser()])
        .then(([userData, cardsUser]) => {
          setUserName(userData.name);
          setUserDescription(userData.about);
          setUserAvatar(userData.avatar);
          setCards(cardsUser);
        })

        .catch((err) => {
          console.log(`Ошибка ${err}`);
        });
    });

  return (
    <div className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            type="button"
            className="profile__avatar-button"
            onClick={onEditAvatar}
          >
            <img
              src={userAvatar}
              alt="Аватар профиля"
              className="profile__avatar"
            />
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add-content"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="element">
        {cards.map((card)=>(
          <Card 
            key={card._id}
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes}
            onCardClick={onCardClick}
            />
        ))}
      </section>
    </div>
  );
}

export default Main;
