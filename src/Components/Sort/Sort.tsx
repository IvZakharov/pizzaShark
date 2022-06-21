import React from 'react';
import styles from './Sort.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';
import { useRef } from 'react';

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filter.sort);
  const sortRef = useRef<HTMLDivElement>(null);

  type SortItem = {
    name: string;
    sortProperty: 'rating' | 'price' | '-price';
  };

  const sortArr: SortItem[] = [
    {
      name: 'Популярные',
      sortProperty: 'rating',
    },
    {
      name: 'Цены(сначала дорогие)',
      sortProperty: 'price',
    },
    {
      name: 'Цены(сначала дешевые)',
      sortProperty: '-price',
    },
  ];

  const [openPopup, setOpenedPopup] = React.useState(false);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpenedPopup(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpenedPopup(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className={styles.sort}>
      <div onClick={() => setOpenedPopup(!openPopup)} className={styles.label}>
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.480723 0.624999C0.480723 0.455728 0.542715 0.309244 0.6667 0.185546C0.790685 0.0618481 0.937508 -8.36321e-07 1.10717 -8.21489e-07L9.87746 -5.47659e-08C10.0471 -3.99335e-08 10.1939 0.0618489 10.3179 0.185547C10.4419 0.309245 10.5039 0.455729 10.5039 0.625C10.5039 0.794271 10.4419 0.940755 10.3179 1.06445L5.93279 5.43945C5.8088 5.56315 5.66198 5.625 5.49231 5.625C5.32265 5.625 5.17583 5.56315 5.05184 5.43945L0.6667 1.06445C0.542715 0.940754 0.480723 0.79427 0.480723 0.624999Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировать: </b>
        <span>{sort.name}</span>
      </div>
      {openPopup && (
        <div className={styles.popup}>
          <ul className={styles.list}>
            {sortArr.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={obj.name === sort.name ? styles.active : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
