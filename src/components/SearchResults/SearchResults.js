import React from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults() {
  return (
    <div className="search-results">
      <h2 className="search-results__text">Результаты поиска</h2>
      <NewsCardList/>
      <button className="search-results__button">Показать ещё</button>
    </div>
  );
}

export default SearchResults;
