import React from 'react';
import avatar from '../../images/OOXmAnjdm6A.jpg';
import './About.css';

function About() {
  return (
    <div className="about">
      <img className="about__avatar" src={avatar} alt="NewsExplorer"/>
      <div className="about__text-content">
        <h2 className="about__header" >{'Об авторе'}</h2>
        <p className="about__text" >{ 'Привет, меня зовут Луна Грин и я начинающий программист. За неполный год обучения в Яндекс.Практикуме я освоила JS, REACT, работу с Git, Flex и Grid верстку и немного бэкенд.'}</p>
       <p className="about__text" >{ `
Пусть я только начинаю свой путь в мир программирования, но я уже могу и умею многое, а надеюсь узнать и научиться еще большему.` }</p></div>
      </div>
  );
}
export default About;
