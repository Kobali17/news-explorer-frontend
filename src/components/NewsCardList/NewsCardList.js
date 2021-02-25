import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <div className="news-card__background">
    <div className="news-card-list">
        {props.cards ? props.cards.slice(0, props.resultCards).map((card, key) => (
          <NewsCard key={key}
                    card={card}
                    cardsSave={props.cardsSave}
                    cardsDel={props.cardsDel}
                    loggedIn={props.loggedIn}
                />
        )) : ''}
    </div>
    </div>
  );
}

export default NewsCardList;
