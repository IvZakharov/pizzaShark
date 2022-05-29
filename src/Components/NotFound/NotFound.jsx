import React from 'react';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';
import img from './img/img.svg';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Такой страницы нет :(</p>
      <Link to="/" className={`${styles.button} button`}>
        Вернуться на главную
      </Link>
      <img className={styles.img} src={img} alt="" />
    </div>
  );
}

export default NotFound;
