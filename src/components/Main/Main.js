import React from 'react';
import Header from '../Header/Header';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';

function Main(props) {
  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
        <main className="main">
          <Header link={props.link}
                  text={props.text}
                  secondlink={props.secondlink}
                  secondText={props.secondText}
                  buttonText={props.buttonText}
                  onClick={props.onClick}
                  menuClick={props.menuClick}
                  onSubmit={props.onSubmit}
                  onClose={props.onClose}
                  isOpen={props.isOpen}
                  onSecondClick={props.onSecondClick}
          />
          <h1 className="main__header">Что творится в мире?</h1>
          <p className="main__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
          <SearchForm/>
        </main>
      </>
  );
}

export default Main;
