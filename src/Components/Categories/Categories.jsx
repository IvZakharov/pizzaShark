import React from 'react';
import styles from './Categories.module.scss';

function Categories({ value, onChangeCategory }) {
  const categoriesArr = ['Все', 'Мясные', 'Морские', 'Вегетарианские', 'Сырные', 'Острые'];

  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categoriesArr.map((item, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? styles.active : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
