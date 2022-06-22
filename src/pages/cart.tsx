import React from 'react';
import CartItem from '../Components/Cart/CartItem';
import { useSelector } from 'react-redux';
import { clearItem } from '../redux/slices/cartSlice';
import { RootState, useAppDispatch } from '../redux/store';

function Cart() {
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  console.log(totalPrice);

  const onClickClear = () => {
    dispatch(clearItem());
  };

  return (
    <section className="cart">
      <div className="cart__header">
        <div className="cart__title-box">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z"
              stroke="#3F3F3F"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z"
              stroke="#3F3F3F"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825"
              stroke="#3F3F3F"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="cart__title">Корзина</h1>
        </div>
        <button onClick={onClickClear} className="cart__clear-all">
          <i>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66675 5.00001V3.33334C6.66675 2.89131 6.84234 2.46739 7.1549 2.15483C7.46746 1.84227 7.89139 1.66667 8.33342 1.66667H11.6667C12.1088 1.66667 12.5327 1.84227 12.8453 2.15483C13.1578 2.46739 13.3334 2.89131 13.3334 3.33334V5.00001M15.8334 5.00001V16.6667C15.8334 17.1087 15.6578 17.5326 15.3453 17.8452C15.0327 18.1577 14.6088 18.3333 14.1667 18.3333H5.83341C5.39139 18.3333 4.96746 18.1577 4.6549 17.8452C4.34234 17.5326 4.16675 17.1087 4.16675 16.6667V5.00001H15.8334Z"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33325 9.16667V14.1667"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.6667 9.16667V14.1667"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          <span>Очистить корзину</span>
        </button>
      </div>

      <ul className="cart__list">
        {items.map((obj, i) => (
          <CartItem key={i} {...obj} />
        ))}
      </ul>

      <div className="cart__bottom">
        <div className="cart__total-block">
          <p className="cart__totla-count">
            Всего пицц: <b>{totalCount} шт.</b>
          </p>
          <p className="cart__total-price">
            Сумма заказа: <b>{totalPrice} ₽</b>
          </p>
        </div>

        <div className="cart__buttons-block">
          <button className="cart__button button button--back">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Вернуться назад
          </button>
          <button className="cart__button button">Оплатить сейчас</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
