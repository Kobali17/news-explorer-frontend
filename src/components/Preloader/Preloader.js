import React from 'react';
import './Preloader.css';

function Preloader(props) {
  return (
    <div className={props.isLoaderVisability ? 'preloader' : 'preloader-hide' }>
    <i className="preloader__circle"/>
    <p className="preloader__text">Идет поиск новостей...</p>
    </div>
  );
}
export default Preloader;
