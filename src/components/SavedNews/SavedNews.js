import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNews(props) {
  const currentUser = React.useContext(CurrentUserContext);
  console.log(props.cards);
  function keyWord(items) {
    const keyWordArr = [];
    items.map((item) => (keyWordArr.includes(item.keyword) ? '' : keyWordArr.push(item.keyword)));
    return keyWord;
  }

  return (
    <>
            <div className="saved-news">
              <SavedNewsHeader link={props.link}
                               text={props.text}
                               secondlink={props.secondlink}
                               secondText={props.secondText}
                               buttonText={props.buttonText}
                               menuClick={props.menuClick}
                               logOut={props.logOut}
              />
              <p className="saved-news__title">Сохранённые статьи</p>
              <h1 className="saved-news__header">{currentUser.name}, у вас {props.cards.length} сохраненных статей</h1>
              <p className="saved-news__text">По ключевым
                словам: {} и {keyWord(props.cards).length - 2}-м другим</p>
            </div>
            <NewsCardList isSaved={props.isSaved}
                          cardsDel={props.cardsDel}
                          loggedIn={props.isLoggedIn}
                          cards={props.cards}
            />
            </>
  );
}

export default SavedNews;
