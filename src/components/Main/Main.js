import React from 'react'
import { api } from '../../utils/Api'
import Card from '../Card/Card'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  handleCardLike,
}) {
  const [cards, setCards] = React.useState([])
  const currentUser = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    api
      .getCards()
      .then((cards) => {
        setCards(cards)
      })
      .catch(console.log)
  }, [])

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__button">
          <img
            onClick={onEditAvatar}
            alt="Картинка профиля"
            className="profile__avatar"
            src={currentUser.avatar}
          />
        </div>

        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__edit-button"
              title="Редактировать профиль"
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
          title="Добавить новую карточку"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              handleCardLike={handleCardLike}
            />
          )
        })}
      </section>
    </main>
  )
}
export default Main
