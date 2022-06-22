import styles from './ProductCard.module.scss';
import React from 'react';

import { useDispatch } from 'react-redux';
import { addItem, CartItem } from '../../redux/slices/cartSlice';

type ProductCard = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  types: number[];
  sizes: number[];
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ProductCard: React.FC<ProductCard> = ({
  id,
  title,
  description,
  imageUrl,
  price,
  types,
  sizes,
}) => {
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);

  const typesNames = ['Тонкое', 'Традиционное'];

  const onCLickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typesNames[activeType],
      size: activeSize,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <article key={id} className={styles.productCard}>
      <div className={styles.imgBox}>
        <img src={imageUrl} alt="" />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <div className={styles.selector}>
        <ul>
          {types.map((type, i) => (
            <li
              key={type}
              onClick={() => setActiveType(i)}
              className={activeType === i ? styles.active : ''}>
              {typesNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? styles.active : ''}>
              {size} см
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.bottom}>
        <p className={styles.price}>
          <span>{price} Р</span>
        </p>

        <button onClick={() => onCLickAdd()} className={styles.addToCart}>
          <i>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.18 6.03002H9.76995V1.62002C9.76995 0.808217 9.11176 0.150024 8.29995 0.150024C7.48814 0.150024 6.82995 0.808217 6.82995 1.62002V6.03002H2.41995C1.60814 6.03002 0.949951 6.68822 0.949951 7.50002C0.949951 8.31183 1.60814 8.97002 2.41995 8.97002H6.82995V13.38C6.82995 14.1918 7.48814 14.85 8.29995 14.85C9.11176 14.85 9.76995 14.1918 9.76995 13.38V8.97002H14.18C14.9918 8.97002 15.65 8.31183 15.65 7.50002C15.65 6.68822 14.9918 6.03002 14.18 6.03002Z"
                fill="#EE674A"
              />
            </svg>
          </i>
          <span>Добавить</span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
