import React from 'react';
import './Footer.css';

function Footer() {
  return (
        <footer className="footer">
            <p className="footer__text">&copy; 2020 Supersite, Powered by News API</p>
          <div className="footer__data">
          <p className="footer__link">Главная</p>
          <p className="footer__link">Яндекс.Практикум</p>
            <button className="footer__icon_git" />
            <button className="footer__icon_face" />
          </div>
        </footer>
  );
}

export default Footer;
