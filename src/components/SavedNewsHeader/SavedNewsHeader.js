import React from 'react';
// import CurrentUserContext from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';
import { Link } from 'react-router-dom';
import logo2 from '../../images/NewsExplorer.svg';
import exit from '../../images/Union.jpg';

function SavedNewsHeader(props) {
  return (
    <header className="saved-header">
      <img className="saved-header__logo" src={logo2} alt="NewsExplorer"/>
      <div className="saved-header__navigation">
        <Link className="saved-header__link" to={props.link} >{props.text}</Link>
        <Link className="saved-header__link" to={props.secondlink} >{props.secondText}</Link>
        <button className="saved-header__button" >{props.buttonText}<img className="saved-header__button-img" src={exit} alt="Exit"/></button>
        <button className="saved-header__menu-button" onClick={props.menuClick}/>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
