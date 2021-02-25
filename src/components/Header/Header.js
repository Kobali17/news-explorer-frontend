import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
        <header className="header">
          <img className="header__logo" src={logo} alt="NewsExplorer"/>
            <Navigation isLoggedIn={props.isLoggedIn}
                        buttonText={props.buttonText}
                        login={props.login}
                        logOut={props.logOut}
                        menuClick={props.menuClick}
                        onSubmit={props.onSubmit}
                        onClose={props.onClose}
                        isOpen={props.isOpen}
                        onSecondClick={props.onSecondClick}
            />
        </header>);
}

export default Header;
