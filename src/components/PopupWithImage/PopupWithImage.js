function PopupWithImage({ card }) {
  return (
    <section className={`popup popup-zoom ${card && 'popup_opened'} `}>
      <div className="popup-zoom__container">
        <img
          src={card && card.link} //костыль или нет...
          alt={`Увеличенное изображение ${card.name}`}
          className="popup-zoom__image"
        />
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
        ></button>
        <p className="popup-zoom__title">{card.name}</p>
      </div>
    </section>
  )
}
export default PopupWithImage
