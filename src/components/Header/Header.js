import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
        <header className="header">
          <img className="header__logo" src={logo} alt="NewsExplorer"/>
            <Navigation link={props.link}
                        text={props.text}
                        secondlink={props.secondlink}
                        secondText={props.secondText}
                        buttonText={props.buttonText}
                        onClick={props.onClick}/>
        </header>);
}

export default Header;
