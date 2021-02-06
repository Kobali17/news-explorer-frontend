import React from 'react';
// import NewsCard from '../NewsCard/NewsCard';
// import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';

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
                  onClick={props.onClick}/>
          <h1 className="main__header">Что творится в мире?</h1>
          <p className="main__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
          <SearchForm/>
        </main>
      <About/>
      <Footer/>
      </>
  );
}

export default Main;
