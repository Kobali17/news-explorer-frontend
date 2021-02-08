import React from 'react';
import './MenuPopup.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function MenuPopup(props) {
  return (
    <div id={props.popupId} className={`menu ${props.isOpen ? 'menu_opened' : ''}`}>
      <div className="menu__content" >
        <div className="menu__header">
      <img className="header__logo" src={logo} alt="NewsExplorer"/>
        <button id="menu-close" className="menu__close-button" onClick={props.onClose}/>
        </div>
        <Link className="menu__link" to={props.link} >{props.text}</Link>
        <Link className="menu__link" to={props.secondlink} >{props.secondText}</Link>
        <button className="menu__button" onClick={props.onClick} >{props.buttonText}</button>
      </div>
    </div>
  );
}

export default MenuPopup;
