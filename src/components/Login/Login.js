import React from 'react';
import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handelSetEmail(e) {
    setEmail(e.target.value);
  }

  function handelSetPassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      email,
      password,
    });
    props.onClose();
  };
  return (
          <PopupWithForm buttonText={'Войти'}
                         onSubmit={handleSubmit}
                         title={'Вход'}
                         popupId="login"
                         formId="login-form"
                         onClose={props.onClose}
                         isOpen={props.isOpen}
                         link={props.link}
                         linkText={props.linkText}>
            <p className="popup__input-text">Email</p>
              <input id="login-email" required placeholder="Введите почту" type="text" name="email" onChange={handelSetEmail}
                     className="popup__input"
                     minLength="2" maxLength="40" value={email}/>
              <span id="login-email-error" className="popup__input_error"/>
            <p className="popup__input-text">Пароль</p>
              <input value={password} id="login-password" required placeholder="Введите пароль" type="password" name="password"
                     className="popup__input" onChange={handelSetPassword}
                     minLength="2" maxLength="200"/>
              <span id="login-password-error" className="popup__input_error"/>
          </PopupWithForm>
  );
}

export default Login;
