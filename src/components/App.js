import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import PopupWithForm from './PopupWithForm/PopupWithForm'
import PopupWithImage from './PopupWithImage/PopupWithImage'

function App() {
  return (
    <div className="body">
      <Header />
      <Main
        handleEditAvatarClick={() => {
          document.querySelector('.popup_avatar').classList.add('popup_opened')
        }}
        handleEditProfileClick={() => {
          document.querySelector('.popup_profile').classList.add('popup_opened')
        }}
        handleAddPlaceClick={() => {
          document
            .querySelector('.popup_new-card')
            .classList.add('popup_opened')
        }}
      />
      <Footer />
      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile'}
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
      <PopupWithImage />
      {/* <section className="popup popup_profile">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form_profile"
            name="profile-form"
            noValidate
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
          </form>
        </div>
      </section> */}

      {/* <section className="popup popup_new-card">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form popup__form_new-card"
            name="new-card-form"
            noValidate
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
          </form>
        </div>
      </section> */}

      {/* <section className="popup popup_avatar">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__form popup__form_avatar"
            name="new-card-form"
            noValidate
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
          </form>
        </div>
      </section> */}
      {/* 
      <section className="popup popup_confirm-delete">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title popup__title_type_confirm-delete">
            Вы уверены?
          </h2>
          <form
            className="popup__form"
            name="popup_confirm-delete"
            noValidate
          >
            <button
              type="submit"
              className="popup__button"
              aria-label="Сохранить изменения"
            >
              Да
            </button>
          </form>
        </div>
      </section> */}

      {/* <section className="popup popup-zoom">
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
      </section> */}

      <template className="template">
        <div className="elements__item card">
          <img
            className="elements__image card__image"
            alt="alt для img"
          />
          <button
            type="button"
            className="elements__trash-button card__trash-button"
          ></button>
          <div className="elements__container card__container">
            <h2 className="elements__title card__title">
              титульник для элемента
            </h2>
            <div className="elements__likes-container">
              <button
                type="button"
                className="elements__button card__button"
              ></button>
              <p className="elements__likes-counter card__likes-counter"></p>
            </div>
          </div>
        </div>
      </template>
    </div>
  )
}

export default App
