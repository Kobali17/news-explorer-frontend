import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews(props) {
  // const currentUser = React.useContext(CurrentUserContext);

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
      <h1 className="saved-news__header">{'Луна'}, у вас {'6'} сохраненных статей</h1>
      <p className="saved-news__text">По ключевым словам: {'Природа'}, {'Тайга'} и {'2'}-м другим</p>
    </div>
      <NewsCardList cardSaved={props.cardSaved}cards={props.cards}/>
    </>
  );
}

export default SavedNews;
