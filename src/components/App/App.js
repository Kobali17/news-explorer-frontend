import React from 'react';
import {
  Route, Switch, useHistory,
} from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import MenuPopup from '../MenuPopup/MenuPopup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NotFound from '../NotFound/NotFound';
import getNews from '../../utils/NewsApi';
import * as auth from '../../utils/auth';
import api from '../../utils/Api';
import Preloader from '../Preloader/Preloader';
import SearchCardsContext from '../../contexts/SearchCardsContext';
import SavedCardsContext from '../../contexts/SavedCardsContext';

function App() {
  const [userData, setUserData] = React.useState({
  });
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false);
  const [isRegisterSuccess, setRegisterSuccess] = React.useState(true);
  const [isInfoToolOpen, setInfoToolOpen] = React.useState(false);
  const [loaderVisibility, setLoaderVisibility] = React.useState(false);
  const [searchDone, setSearchDone] = React.useState(false);
  const [resultCards, setResultCards] = React.useState(3);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [searchTag, setSearchTag] = React.useState('');
  const [userCards, setUserCards] = React.useState([]);
  const [articles, setArticles] = React.useState([]);
  const history = useHistory();
  function getUserData() {
    setLoggedIn(true);
    return Promise.all([api.getInitialArticles(), api.getUserData()]).then(([res, response]) => {
      setUserData(response);
      setUserCards(res);
    });
  }
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      auth.tokenValid(token).then((res) => {
        if (res) {
          getUserData().catch((err) => {
            console.log(err);
          });
        } else {
          setLoggedIn(false);
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  }, []);

  function closeAllPopups() {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(false);
    setMenuPopupOpen(false);
    setInfoToolOpen(false);
  }
  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }
  React.useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  });

  function handleSearchNews(keyword) {
    setLoaderVisibility(true);
    setArticles([]);
    setNotFound(false);
    return getNews(keyword)
      .then((data) => {
        data.articles = data.articles.map((cardData) => {
          cardData.source.id = 'bla!';
          return cardData;
        });
        setArticles(data.articles);
        setNotFound(false);
        setLoaderVisibility(false);
        if (data.articles === undefined) {
          setNotFound(true);
        }
        if (data.articles.length === 0) {
          setNotFound(true);
          setSearchDone(false);
        }
        if (data.articles.length !== 0) {
          setSearchDone(true);
          setSearchTag(keyword);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getUserNews() {
    return api.getInitialArticles()
      .then((newCard) => {
        setUserCards([...userCards, newCard]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleSaveNews(article, setSaved) {
    return api.createArticle(article, searchTag)
      .then((res) => {
        setSaved(true);
        setUserCards([...userCards, res]);
        getUserNews().catch((err) => {
          console.log(err);
        });
      });
  }

  function handleBookmarkClick(card, setSaved) {
    return api.createArticle(card, searchTag)
      .then((res) => {
        setSaved(true);
        setUserCards([...userCards, res]);
        getUserNews().catch((err) => {
          console.log(err);
        });
      });
  }
  function handleDeleteNews(id) {
    return api.removeArticle(id)
      .then(() => {
        const arrSavedNews = userCards.filter((c) => (c._id !== id));
        setUserCards(arrSavedNews);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleRegister(registerData) {
    auth.register(registerData).then((res) => {
      if (res !== null) {
        setRegisterSuccess(true);
        closeAllPopups();
        setInfoToolOpen(true);
      }
    }).catch((err) => {
      console.log(err);
      setRegisterSuccess(false);
      closeAllPopups();
      setInfoToolOpen(true);
    });
  }

  function handleLogin(loginData) {
    auth.logIn(loginData).then((res) => {
      if (res !== null) {
        getUserData().catch((err) => {
          console.log(err);
          closeAllPopups();
          setLoggedIn(true);
        });
      }
    }).catch((err) => {
      console.log(err);
      setRegisterSuccess(false);
      closeAllPopups();
      setInfoToolOpen(true);
    });
  }
  function handleLogout() {
    localStorage.removeItem('jwt');
    history.push('/');
    setLoggedIn(false);
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
    <CurrentUserContext.Provider value={userData}>
      <SearchCardsContext.Provider value={articles}>
        <SavedCardsContext.Provider value={userCards}>
   <Switch>
     <ProtectedRoute component={SavedNews}
                     link={'/'}
                     cards={userCards}
                     onClick={handleBookmarkClick}
                     cardsSave={handleSaveNews}
                     cardsDel={handleDeleteNews}
                     text={'Главная'}
                     secondlink={'/saved-news'}
                     secondText={'Сохранённые статьи'}
                     menuClick={openMenuPopup}
                     logOut={handleLogout}
                     handleLoginOpen={openLoginPopup}
                     isLoggedIn={loggedIn}
                     path={'/saved-news'}>
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
     </ProtectedRoute>
        <Route exact path={'/'}>
          <Main
            isLoggedIn={loggedIn}
            login={openLoginPopup}
            logOut={handleLogout}
            menuClick={openMenuPopup}
            searchSubmit={handleSearchNews}/>
          <Preloader isLoaderVisability={loaderVisibility}/>
            <SearchResults cards={articles}
                           loggedIn={loggedIn}
                           cardsSave={handleSaveNews}
                           onClick={handleBookmarkClick}
                           isSearchDone={searchDone}
                           cardsDel={handleDeleteNews}
                           resultCards={resultCards}
                           setResultCards={setResultCards}
            />
            <NotFound isOpen={notFound}/>
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
          <Login onSubmit={handleLogin}
                 link={openRegisterPopup}
                 linkText={'Зарегестрироваться'}
                 onClose={closeAllPopups}
                 isOpen={isLoginPopupOpen}/>
          <Register onSubmit={handleRegister}
                    link={openLoginPopup}
                    linkText={'Войти'}
                    onClose={closeAllPopups}
                    isOpen={isRegisterPopupOpen}
          />
        </Route>
</Switch>
      <InfoTooltip isSuccess={isRegisterSuccess} isOpen={isInfoToolOpen} onClose={closeAllPopups}/>

      </SavedCardsContext.Provider>
      </SearchCardsContext.Provider>
      </CurrentUserContext.Provider>

  );
}

export default App;
