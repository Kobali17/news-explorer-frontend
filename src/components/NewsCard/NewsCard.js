import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
  const [saved, setSaved] = React.useState(false);
  function handelClick() {
    if (props.card.saved) {
      props.cardsDel(props.card._id);
    } else {
      props.cardsSave(props.card);
      setSaved(true);
    }
  }
  function handleDate(date) {
    const month = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];
    const now = new Date(date);
    const formatDate = `${now.getDate()} ${month[now.getMonth()]}, ${now.getFullYear()}`;
    return formatDate;
  }
  return (
        <div className="card" key={props.card._id}>
          { props.loggedIn
            ? (<button className={saved && props.loggedIn ? 'card__check-button' : 'card__check-button'} onClick={handelClick} type="button" />)
            : (<button className={'card__check-button__inactive'} type="button" />)
          }
          <div className={`card__tag${props.card.tag ? '' : 'card__tag_hidden'}`}>
            <p className='card__tag_text'>
              {props.card.keyword}
            </p>
          </div>
            <img className="card__img"
             src={props.card.urlToImage} alt={props.text}/>
            <div className="card__info">
              <p className="card__data">{handleDate(props.card.publishedAt)}</p>
                <h3 className="card__title">{props.card.title}</h3>
              <p className="card__text">{props.card.description}</p>
              <p className="card__source">{props.card.source.name}</p>
            </div>
        </div>
  );
}

export default NewsCard;
