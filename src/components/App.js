import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import PopupWithForm from './PopupWithForm/PopupWithForm'
import PopupWithImage from './PopupWithImage/PopupWithImage'
import React from 'react'

function App() {
  // состояния для открытия попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false)
  const [isEditAvatar, setIsEditAvatar] = React.useState(false)
  const [isAddPlace, setIsAddPlace] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState('')

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatar(false)
    setIsAddPlace(false)
    setSelectedCard(null)
  }

  function onCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="body">
      <Header />
      <Main
        onEditAvatar={() => {
          setIsEditAvatar(!isEditAvatar)
        }}
        onEditProfile={() => {
          setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
        }}
        onAddPlace={() => {
          setIsAddPlace(!isAddPlace)
        }}
        onCardClick={onCardClick}
      />
      <Footer />
      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_profile"
          placeholder="Имя"
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span
          className="popup__error"
          id="profile-error"
        ></span>
        <input
          className="popup__input popup__input_type_about"
          type="text"
          placeholder="О себе"
          name="about"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          className="popup__error"
          id="about-error"
        ></span>
        <button
          type="submit"
          className="popup__button"
          aria-label="Сохранить изменения"
        >
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        title={'Новое место'}
        name={'new-card'}
        isOpen={isAddPlace}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_name"
          placeholder="Название"
          name="name"
          minLength="2"
          maxLength="30"
          required
        />
        <span
          className="popup__error"
          id="name-error"
        ></span>
        <input
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          name="link"
          type="url"
          required
        />
        <span
          className="popup__error"
          id="link-error"
        ></span>
        <button
          type="submit"
          className="popup__button popup__button_disabled"
          aria-label="Сохранить изменения"
          disabled
        >
          Создать
        </button>
      </PopupWithForm>

      <PopupWithForm
        title={'Обновить аватар'}
        name={'avatar'}
        isOpen={isEditAvatar}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          name="avatar"
          type="url"
          required
        />
        <span
          className="popup__error"
          id="avatar-error"
        ></span>
        <button
          type="submit"
          className="popup__button popup__button_disabled"
          aria-label="Сохранить изменения"
          disabled
        >
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        title={'Вы уверены?'}
        name={'confirm-delete'}
      >
        <button
          type="submit"
          className="popup__button"
          aria-label="Сохранить изменения"
        >
          Да
        </button>
      </PopupWithForm>
      <PopupWithImage card={selectedCard} />
    </div>
  )
}

export default App
