import React from "react";
export const Header = ({onClickCart}) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img className='logo' src="/img/logo.png" alt="logo"/>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин кращих кросівок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img className="icon" src="/img/cart.svg" alt="cart"/>
          <span>1205 ₴</span>
        </li>

        <li>
          <img className="icon" src="/img/user.svg" alt="user"/>
        </li>
      </ul>
    </header>


  )
}