import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import PopupWithForm from './PopupWithForm/PopupWithForm'
import EditProfilePopup from './EditProfilePopup/EditProfilePopup'
import ImagePopup from './ImagePopup/ImagePopup'
import EditAvatarPopup from './EditAvatarPopup/EditAvatarPopup'
import React from 'react'
import { api } from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import AddPlacePopup from './AddPlacePopup/AddPlacePopup '

function App() {
  // состояния для открытия попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false)
  const [isEditAvatar, setIsEditAvatar] = React.useState(false)
  const [isAddPlace, setIsAddPlace] = React.useState(false)
  const [isImagePopup, setIsImagePopup] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' })

  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '' })

  const [cards, setCards] = React.useState([]) //карточки

  React.useEffect(() => {
    api
      .getProfile()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch(console.log)
  }, [])

  React.useEffect(() => {
    api
      .getCards()
      .then((cards) => {
        setCards(cards)
      })
      .catch(console.log)
  }, [])

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatar(false)
    setIsAddPlace(false)
    setIsImagePopup(false)
  }

  const onCardClick = (card) => {
    setIsImagePopup(true) //для плавности открытия, и чтобы не было видимости пустых полей
    setSelectedCard(card)
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id)

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        )
      })
      .catch(console.log)
  }
  function handleCardDelete(card) {
    //удаление карточки
    api
      .deleteCard(card._id)
      .then((res) => {
        //обновленией стейта с карточками
        setCards(
          cards.filter((c) => {
            //с -- очередная карточка из массива cards
            return c !== card //возвращаем false, если находим карточку, которую удаляли. Метод filter не добавит его в новый массив cards
          })
        )
      })
      .catch(console.log)
  }
  function handleUpdateUser(data) {
    api
      .editProfile(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(console.log)
  }
  function handleUpdateAvatar(data) {
    api
      .editAvatar(data.avatar)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(console.log)
  }

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch(console.log)
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
          handleCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatar}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlace}
          onClose={closeAllPopups}
          addPlaceSubmit={handleAddPlaceSubmit}
        />

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
