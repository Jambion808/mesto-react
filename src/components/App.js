import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})


  // function handleEditAvatarClick(){
  //   setIsEditAvatarPopupOpen(true)
  // }

  // function handleEditProfileClick(){
  //   setIsEditProfilePopupOpen(true)
  // }

  // function handleAddPlaceClick(){
  //   setIsAddPlacePopupOpen(true)
  // }
  // function handleCardClick(card){
  //   setSelectedCard(card)
  // }

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="App">
      <div class="page">
        <Header />
        <Main 
        onEditAvatar={setIsEditAvatarPopupOpen}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onCardClick={setSelectedCard}
        />
        <Footer />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="popup_profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                type="text"
                id="name-input"
                className="popup__input popup__input_type_name"
                name="name"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
                required
              />

              <span className="popup__input-error description-input-error"></span>

              <input
                type="text"
                id="description-input"
                className="popup__input popup__input_type_description"
                name="about"
                placeholder="Вид деятельности"
                minlength="2"
                maxlength="200"
                required
              />

              <span className="popup__input-error description-input-error"></span>
            </>
          }
        />

        <PopupWithForm
          name="popup_card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                type="text"
                id="place-input"
                className="popup__input popup__input_type_place"
                name="name"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
              />

              <span className="popup__input-error place-input-error"></span>

              <input
                type="url"
                id="url-input"
                className="popup__input popup__input_type_url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />

              <span className="popup__input-error url-input-error"></span>
            </>
          }
        />

        <PopupWithForm
          name="popup_avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                type="url"
                id="link-input-avatar"
                className="popup__input popup__input_type_avatar"
                name="avatar"
                placeholder="Ссылка на аватар"
                required
              />
              <span className="popup__input-error link-input-avatar-error"></span>
            </>
          }
        />

        <PopupWithForm
          name="popup_delete"
          title="Вы уверены?"
          buttonText="Да"
          
        />


      </div>
    </div>
  );
}

export default App;
