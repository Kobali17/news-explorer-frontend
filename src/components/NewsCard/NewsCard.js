import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
  const isOwn = true;
  const cardLoginButtonClassName = (
    `card__check-button ${!isOwn ? 'card__check-button_hidden' : ''}`
  );
  const isLiked = false;
  const cardCheckButtonClassName = (
    `card__check-button ${isLiked ? 'card_checked' : ''}`
  );

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  return (
        <div className="card">
            <button type="button" className={`${cardCheckButtonClassName} ${cardLoginButtonClassName} ${props.cardDelClass}`} onClick={handleLikeClick}/>
            <img className="card__img"
             src="https://sun1-21.userapi.com/impf/QBFeRsL_E8cMLLJT8VeYSajkBP6DeTDlmJ54BQ/t6La5nls1Mg.jpg?size=1080x1080&quality=96&proxy=1&sign=b01e207c0e000335ad33edb4f6869c3b&type=album" alt={'props.text'}/>
            <div className="card__info">
              <p className="card__data">{'2 августа, 2019'}</p>
                <h3 className="card__title">{'Национальное достояние – парки'}</h3>
              <p className="card__text">{'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}</p>
              <p className="card__source">{'ДЗЕН'}</p>
            </div>
        </div>
  );
}

export default NewsCard;
