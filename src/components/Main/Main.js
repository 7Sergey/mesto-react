function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__button">
          <img
            onClick={onEditAvatar}
            alt="Картинка профиля"
            className="profile__avatar"
          />
        </div>

        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__edit-button"
              title="Редактировать профиль"
            ></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
          title="Добавить новую карточку"
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  )
}
export default Main
