import React, { Suspense } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';

function NewsCardList() {
  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="news-card__background">
    <div className="news-card-list">
      <Suspense fallback={<Preloader/>}>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      </Suspense>
    </div>
    </div>
  );
}

export default NewsCardList;
