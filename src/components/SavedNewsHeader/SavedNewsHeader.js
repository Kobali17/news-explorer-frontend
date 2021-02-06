import React from 'react';
// import CurrentUserContext from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';
import { Link } from 'react-router-dom';
import logo from '../../images/NewsExplorer.jpg';
import exit from '../../images/Union.jpg';

function SavedNewsHeader(props) {
  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className="saved-header">
      <img className="saved-header__logo" src={logo} alt="NewsExplorer"/>
      <div className="saved-header__navigation">
        <Link className="saved-header__link" to={props.link} >{props.text}</Link>
        <Link className="saved-header__link" to={props.secondLink} >{props.secondText}</Link>
        <button className="saved-header__button" >{props.buttonText}<img className="saved-header__button-img" src={exit} alt="Exit"/></button>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
