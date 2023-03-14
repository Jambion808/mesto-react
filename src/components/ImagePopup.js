import React from 'react';


function ImagePopup({name, link, onClose}) {
  return (
<div className={`popup popup_image &{link ? 'popup_opened' : ''}`} >
    <div className="popup__image-container">
      <img className="popup__image-photo" src={link} alt={name} />
      <p className="popup__image-description">{name}</p>
      <button
        className="popup__close popup__image-close"
        type="button" onClick={onClose}
      ></button>
    </div>
  </div>
  );
}

export default ImagePopup;