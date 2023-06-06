import PopupWithForm from '../PopupWithForm/PopupWithForm'
import React from 'react'

function AddPlacePopup({ isOpen, onClose, AddPlaceSubmit }) {
  const [newCard, setNewCard] = React.useState({ name: '', link: '' })

  function handleInputChange(e, name) {
    setNewCard({ ...newCard, [name]: e.target.value }) //динамическое создание свойства черезез []
  }

  function handleSubmit(e) {
    e.preventDefault()

    AddPlaceSubmit(newCard)
  }
  return (
    <PopupWithForm
      title={'Новое место'}
      name={'new-card'}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={'Создать'}
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => handleInputChange(e, 'name')}
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
        onChange={(e) => handleInputChange(e, 'link')}
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
  )
}
export default AddPlacePopup
