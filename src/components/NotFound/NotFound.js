import React from 'react';
import './NotFotund.css';

function NotFound(props) {
  return (
    <div className={props.isOpen ? 'search-results' : 'not-found__hidden'}>
      <h2 className="search-results__text">Результаты не найдены</h2>
    </div>
  );
}

export default NotFound;
