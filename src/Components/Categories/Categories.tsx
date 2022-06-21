import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import styles from './Categories.module.scss';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
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
};

export default Categories;
