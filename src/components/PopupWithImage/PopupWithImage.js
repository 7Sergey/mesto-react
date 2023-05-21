function PopupWithImage() {
  return (
    <section className="popup popup-zoom">
      <div className="popup-zoom__container">
        <img
          src="#"
          alt="Увеличенное изображение"
          className="popup-zoom__image"
        />
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
        ></button>
        <p className="popup-zoom__title">Текст с названием карточки</p>
      </div>
    </section>
  )
}
export default PopupWithImage
