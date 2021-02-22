import React from 'react';
import './NotFotund.css';
import notFound from '../../images/not-found_v1.svg';

function NotFound(props) {
  return (
  <div className={props.isOpen ? 'not-found' : 'not-found-hidden'}>
    <img className='not-found__icon' src={notFound} alt='sad' />
    <h3 className='not-found__title'>Ничего не найдено</h3>
    <p className='not-found__subtitle'>К сожалению по вашему запросу ничего не найдено.</p>
  </div>
  );
}

export default NotFound;
