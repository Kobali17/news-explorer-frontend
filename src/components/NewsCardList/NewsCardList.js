import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="news-card__background">
    <div className="news-card-list">
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </div>
    </div>
  );
}

export default NewsCardList;
