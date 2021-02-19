import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }
  return (
    <div className="search">
    <form className="search__form" method="get" onSubmit={handleSubmit} noValidate>
      <input id="search" required placeholder="Введите тему новости" type="text" name="name"
             className="search__input"
             minLength="2" maxLength="40" />
             <button type="submit" className="search__button">{'Искать'}</button>
    </form>
    </div>
  );
}

export default SearchForm;
