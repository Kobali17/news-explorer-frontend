import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  return (
      <div className="navigation">
        <Link className="navigation__link" to={props.link} >{props.text}</Link>
        <Link className="navigation__link" to={props.secondlink} >{props.secondText}</Link>
        <button className="navigation__button" onClick={props.onClick} >{props.buttonText}</button>
      </div>
  );
}

export default Navigation;
