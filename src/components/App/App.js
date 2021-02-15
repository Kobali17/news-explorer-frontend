import React from 'react';
import {
  Route,
} from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import MenuPopup from '../MenuPopup/MenuPopup';

function App() {
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false);

  function closeAllPopups() {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(false);
    setMenuPopupOpen(false);
  }

  function handleLoginClose() {
    closeAllPopups();
  }
  function handleRegisterClose() {
    closeAllPopups();
  }
  function handleMenuClose() {
    closeAllPopups();
  }
  function openRegisterPopup() {
    closeAllPopups();
    setRegisterPopupOpen(true);
  }
  function openLoginPopup() {
    closeAllPopups();
    setLoginPopupOpen(true);
  }
  function openMenuPopup() {
    setMenuPopupOpen(true);
  }
  return (

   <>
     <Route path={'/saved-news'}>
       <SavedNews link={'/'}
                  text={'Главная'}
                  secondlink={'/saved-news'}
                  secondText={'Сохранённые статьи'}
                  buttonText={'Луна'}
                  menuClick={openMenuPopup}/>
       <MenuPopup onSubmit={handleMenuClose}
                  onClose={closeAllPopups}
                  isOpen={isMenuPopupOpen}
                  onSecondClick={openRegisterPopup}
                  link={'/sign-in'}
                  secondlink={'/'}
                  secondText={''}
                  text={'Главная'}
                  buttonText={'Авторизоваться'}/>
       <Footer/>
     </Route>
        <Route exact path={'/'}>
          <Main
            link={'/'}
            text={'Главная'}
            buttonText={'Авторизоваться'}
            secondlink={''}
            secondText={''}
            onClick={openLoginPopup}
            menuClick={openMenuPopup}
          />
            <SearchResults/>
            <About/>
            <Footer/>
          <MenuPopup onSubmit={handleMenuClose}
                     onClose={closeAllPopups}
                     isOpen={isMenuPopupOpen}
                     onSecondClick={openLoginPopup}
                     link={'/sign-in'}
                     secondlink={''}
                     secondText={''}
                     text={'Главная'}
                     buttonText={'Авторизоваться'}/>
          <Login onSubmit={handleLoginClose}
                 link={openRegisterPopup}
                 linkText={'Зарегестрироваться'}
                 onClose={closeAllPopups}
                 isOpen={isLoginPopupOpen}/>
          <Register onSubmit={handleRegisterClose}
                    link={openLoginPopup}
                    linkText={'Войти'}
                    onClose={closeAllPopups}
                    isOpen={isRegisterPopupOpen}/>
        </Route>
</>

  );
}

export default App;
