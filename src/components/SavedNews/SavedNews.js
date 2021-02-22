import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SavedCardsContext from '../../contexts/SavedCardsContext';

function SavedNews(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const savedCards = React.useContext(SavedCardsContext);
  function keyWord(items) {
    const keyWordArr = [];
    items.map((item) => (keyWordArr.includes(item.keyword) ? '' : keyWordArr.push(item.keyword)));
    return keyWord;
  }

  return (

    <CurrentUserContext>
        <SavedCardsContext>

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
              <h1 className="saved-news__header">{currentUser}, у вас {savedCards.length} сохраненных статей</h1>
              <p className="saved-news__text">По ключевым
                словам: {keyWord(savedCards).slice(0, 2).join(', ')} и {keyWord(savedCards).length - 2}-м другим</p>
            </div>
            <NewsCardList cardSaved={props.cardSaved} cards={props.cards}/>

        </SavedCardsContext>
    </CurrentUserContext>
  );
}

export default SavedNews;
