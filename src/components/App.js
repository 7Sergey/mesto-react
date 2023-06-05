import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import PopupWithForm from './PopupWithForm/PopupWithForm'
import ImagePopup from './ImagePopup/ImagePopup'
import React from 'react'
import { api } from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
  // состояния для открытия попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false)
  const [isEditAvatar, setIsEditAvatar] = React.useState(false)
  const [isAddPlace, setIsAddPlace] = React.useState(false)
  const [isImagePopup, setIsImagePopup] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' })

  const [currentUser, setCurrentUser] = React.useState('')

  React.useEffect(() => {
    api
      .getProfile()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch(console.log)
  }, [])

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatar(false)
    setIsAddPlace(false)
    setIsImagePopup(false)

    // setSelectedCard({ name: '', link: '' })
  }

  const onCardClick = (card) => {
    setIsImagePopup(true) //для плавности открытия, и чтобы не было видимости пустых полей
    setSelectedCard(card)
  }

  function handleCardLike(card) {
    console.log('changeLike')
    console.log(card)
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id)
    console.log(isLiked)

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      console.log(newCard)
      // setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)))
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          handleCardLike={handleCardLike}
        />
        <Footer />
        <PopupWithForm
          title={'Редактировать профиль'}
          name={'profile'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText={'Сохранить'}
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
        </PopupWithForm>

        <PopupWithForm
          title={'Новое место'}
          name={'new-card'}
          isOpen={isAddPlace}
          onClose={closeAllPopups}
          buttonText={'Создать'}
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
        </PopupWithForm>

        <PopupWithForm
          title={'Обновить аватар'}
          name={'avatar'}
          isOpen={isEditAvatar}
          onClose={closeAllPopups}
          buttonText={'Сохранить'}
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
        </PopupWithForm>
        <PopupWithForm
          title={'Вы уверены?'}
          name={'confirm-delete'}
          buttonText={'Да'}
        ></PopupWithForm>
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopup}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
