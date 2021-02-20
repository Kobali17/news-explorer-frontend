import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  function handelSetEmail(e) {
    setEmail(e.target.value);
  }

  function handelSetPassword(e) {
    setPassword(e.target.value);
  }
  function handelSetName(e) {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      email, name, password,
    });
  };
  return (
    <PopupWithForm buttonText={'Зарегестрироваться'}
                   onSubmit={handleSubmit}
                   title={'Регистрация'}
                   popupId="register"
                   formId="register-form"
                   onClose={props.onClose}
                   isOpen={props.isOpen}
                   link={props.link}
                   linkText={props.linkText}>
      <p className="popup__input-text">Email</p>
      <input id="email"
      required
      placeholder="Введите почту"
      type="text"
      name="email"
      onChange={handelSetEmail}
             className="popup__input"
             minLength="2" maxLength="40" value={email}/>
      <span id="email-error" className="popup__input_error"/>
      <p className="popup__input-text">Пароль</p>
      <input value={password}
      id="password" required
      placeholder="Введите пароль" type="password" name="password"
             className="popup__input" onChange={handelSetPassword}
             minLength="2" maxLength="200"/>
      <span id="password-error" className="popup__input_error"/>
      <p className="popup__input-text">Имя</p>
      <input value={name}
      id="name"
      required
      placeholder="Введите своё имя"
      type="name" name="name"
             className="popup__input" onChange={handelSetName}
             minLength="2" maxLength="200"/>
      <span id="name-error" className="popup__input_error"/>
    </PopupWithForm>
  );
}

export default Register;
