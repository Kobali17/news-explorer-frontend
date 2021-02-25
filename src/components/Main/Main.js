import React from 'react';
import Header from '../Header/Header';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';

function Main(props) {
  return (
    <>
        <main className="main">
          <Header
                  login={props.login}
                  logOut={props.logOut}
                  menuClick={props.menuClick}
                  onSubmit={props.onSubmit}
                  onClose={props.onClose}
                  isOpen={props.isOpen}
                  onSecondClick={props.onSecondClick}
                  isLoggedIn={props.isLoggedIn}
          />
          <h1 className="main__header">Что творится в мире?</h1>
          <p className="main__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
          <SearchForm onSubmit={props.searchSubmit}/>
        </main>
      </>
  );
}

export default Main;
