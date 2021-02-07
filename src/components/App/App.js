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

function App() {
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);

  function closeAllPopups() {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(false);
  }

  function handleLoginClose() {
    closeAllPopups();
  }
  function handleRegisterClose() {
    closeAllPopups();
  }
  function openRegisterPopup() {
    setRegisterPopupOpen(true);
  }
  function openLoginPopup() {
    setLoginPopupOpen(true);
  }

  return (

   <>
     <Route path={'/saved-news'}>
       <SavedNews link={'/'}
                  text={'Главная'}
                  secondlink={'/saved-news'}
                  secondText={'Сохранённые статьи'}
                  buttonText={'Луна'}/>
       <Footer/>
     </Route>
    <Route path={'/sign-up'}>
      <>
        <Main link={'/sign-in'}
              text={''}
              buttonText={'Авторизоваться'}
              onClick={openRegisterPopup}/>
        <SearchResults/>
        <About/>
        <Footer/>
        <Register onSubmit={handleRegisterClose}
                  link={'/sign-in'}
                  linkText={'Войти'}
                  onClose={closeAllPopups}
                  isOpen={isRegisterPopupOpen}/>
        </>
    </Route>

  <Route path={'/sign-in'}>
    <>
      <Main link={'/sign-up'}
            text={'Регистрация'}
            buttonText={'Авторизоваться'}
            onClick={openRegisterPopup}/>
      <SearchResults/>
      <About/>
      <Footer/>
      <Login onSubmit={handleLoginClose}
             link={'/sign-in'}
             linkText={'Зарегестрироваться'}
             onClose={closeAllPopups}
             isOpen={isLoginPopupOpen}/>
      </>
  </Route>
        <Route exact path={'/'}>
          <Main
            link={'/'}
            text={'Главная'}
            buttonText={'Авторизоваться'}
            onClick={openLoginPopup}/>
            <SearchResults/>
            <About/>
            <Footer/>
          <Login onSubmit={handleLoginClose}
                 link={'/sign-in'}
                 linkText={'Зарегестрироваться'}
                 onClose={closeAllPopups}
                 isOpen={isLoginPopupOpen}/>
        </Route>
</>

  );
}

export default App;
