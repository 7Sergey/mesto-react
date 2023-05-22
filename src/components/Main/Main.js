import React from 'react'
import { api } from '../../utils/Api'
import Card from '../Card/Card'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState(null)
  const [userDescription, setUserDescription] = React.useState(null)
  const [userAvatar, setUserAvatar] = React.useState(null)
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getProfile().then((data) => {
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    })
  }, [])

  React.useEffect(() => {
    api.getCards().then((cards) => {
      setCards(cards)
    })
  }, [])

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__button">
          <img
            onClick={onEditAvatar}
            alt="Картинка профиля"
            className="profile__avatar"
            src={userAvatar}
          />
        </div>

        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__edit-button"
              title="Редактировать профиль"
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
          title="Добавить новую карточку"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card, i) => {
          return (
            <Card
              card={card}
              key={i}
              onCardClick={onCardClick}
            />
          )
        })}
      </section>
    </main>
  )
}
export default Main
