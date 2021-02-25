import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import exit from '../../images/white-exit.svg';

function Navigation(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <div className="navigation">
        <Link className="navigation__link" to={props.isLoggedIn ? '/' : ''}>{props.isLoggedIn ? 'Главная' : ''}</Link>
        <Link className="navigation__link" to={props.isLoggedIn ? '/saved-news' : '/'}>{props.isLoggedIn ? 'Сохранённые статьи' : 'Главная'}</Link>
        <button className="navigation__button" onClick={props.isLoggedIn ? props.logOut : props.login} >{props.isLoggedIn ? currentUser.name : 'Авторизоваться'}
          {props.isLoggedIn ? <img className="navigation__button-img" src={exit} alt="Exit"/> : ''}
        </button>
        <button className="navigation__menu-button" onClick={props.menuClick}/>
      </div>
      </>
  );
}

export default Navigation;
