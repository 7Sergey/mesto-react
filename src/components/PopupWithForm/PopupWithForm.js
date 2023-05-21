function PopupWithForm({ title, name, children, isOpen }) {
  return (
    <section className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__form_${name}`}
          name={`${name}nprofile-form`}
          noValidate
        >
          {children}
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm
