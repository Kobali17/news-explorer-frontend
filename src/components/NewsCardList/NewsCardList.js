import React, { Suspense } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';

function NewsCardList(props) {
  return (
    <div className="news-card__background">
    <div className="news-card-list">
      <Suspense fallback={<Preloader/>}>
        {props.cards.map((card, key) => (
          <NewsCard key={key}
                card={card}
                    cardsSave={props.cardsSave}
                    cardsDel={props.cardsDel}
                />
        ))}
      </Suspense>
    </div>
    </div>
  );
}

export default NewsCardList;
