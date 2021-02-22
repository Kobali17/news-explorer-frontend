import React from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults(props) {
  function moreCards() {
    props.setResultCards(props.resultCards + 3);
  }
  return (
    <div className={props.isSearchDone ? 'search-results' : 'search-results-hide'}>
      <h2 className="search-results__text">Результаты поиска</h2>
      <NewsCardList cards={props.cards} cardsSave={props.cardsSave}
                    cardsDel={props.cardsDel}
                    resultCards={props.resultCards}
      />
      <button className="search-results__button" onClick={moreCards} >Показать ещё</button>
    </div>
  );
}

export default SearchResults;
