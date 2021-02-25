import React from 'react';
import './SavedNewsHeader.css';
import { Link } from 'react-router-dom';
import logo2 from '../../images/NewsExplorer.svg';
import exit from '../../images/Exit.svg';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <header className="saved-header">
      <img className="saved-header__logo" src={logo2} alt="NewsExplorer"/>
      <div className="saved-header__navigation">
        <Link className="saved-header__link" to={'/'} >Главная</Link>
        <Link className="saved-header__link" to={'/saved-news'} >Сохранённые статьи</Link>
        <button className="saved-header__button" onClick={props.logOut} >{currentUser.name}<img className="saved-header__button-img" src={exit} alt="Exit"/></button>
        <button className="saved-header__menu-button" onClick={props.menuClick}/>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
