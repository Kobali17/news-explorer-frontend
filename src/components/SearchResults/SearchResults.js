import React from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults(props) {
  return (
    <div className="search-results">
      <h2 className="search-results__text">Результаты поиска</h2>
      <NewsCardList cards={props.cards} cardsSave={props.cardsSave}
                    cardsDel={props.cardsDel}/>
      <button className="search-results__button">Показать ещё</button>
    </div>
  );
}

export default SearchResults;
