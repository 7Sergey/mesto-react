function Card({ card, onCardClick }) {
  return (
    <div className="elements__item card">
      <img
        className="elements__image card__image"
        alt={card.name}
        src={card.link}
        onClick={() => onCardClick(card)}
      />
      <button
        type="button"
        className="elements__trash-button card__trash-button"
      ></button>
      <div className="elements__container card__container">
        <h2 className="elements__title card__title">{card.name}</h2>
        <div className="elements__likes-container">
          <button
            type="button"
            className="elements__button card__button"
          ></button>
          <p className="elements__likes-counter card__likes-counter">
            {card.likes.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
