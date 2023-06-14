import React from "react";
import {Link} from "react-router-dom";
export const Header = ({onClickCart}) => {
  return (
    <header className="d-flex justify-between align-center p-40">

        <Link to="/">
          <div className="d-flex align-center">
          <img className='logo' src="/img/logo.png" alt="logo"/>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин кращих кросівок</p>
        </div>
      </div>
        </Link>


      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img className="icon" src="/img/cart.svg" alt="cart"/>
          <span>1205 ₴</span>
        </li>

        <li className="cu-p mr-30">
          <Link to="/favorites">
            <img className="icon" src="/img/heart.svg" alt="heard"/>
          </Link>
        </li>

        <li className="cu-p">
          <img className="icon" src="/img/user.svg" alt="user"/>
        </li>
      </ul>
    </header>


  )
}