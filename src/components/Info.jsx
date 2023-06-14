import React from 'react';
// import AppContext from '../context';

export const Info = ({onClose}) => { //{ title, image, description }
  // const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src="/img/empty-cart.jpg" alt="Empty" />
      <h2>Корзина пуста</h2>
      <p className="opacity-6">Добавте хоть одну пару кросівок щоб зробити заказ</p>
      <button onClick={onClose} className="greenButton">
        <img  src="img/arrow.svg" alt="Arrow" />
        Вернути назад
      </button>
    </div>
  );
};

