import React from "react";
import styles from './Drawer.module.scss'

export const Drawer = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className="items">
          <h2 className="mb-40 d-flex justify-between align-center ">
            Кошик
            <img className="removeBtn cu-p" width={32} height={32} src="/img/btn-remove.svg" alt="remove"/>
          </h2>

          <div className="cartItem d-flex align-center">
            <img
              className="cartItemImg"
              src="/img/sneakers/1.jpg" alt="sneakers"/>
            <div className="mr-20">
              <p className="mb-5">Чоловічі Кросівки Nike Blazer Mid Suede</p>
              <b>5000 ₴</b>
            </div>
            <img className="removeBtn" width={32} height={32} src="/img/btn-remove.svg" alt="remove"/>
          </div>
          <div className="cartItem d-flex align-center">
            <img
              className="cartItemImg"
              src="/img/sneakers/2.jpg" alt="sneakers"/>
            <div className="mr-20">
              <p className="mb-5">Чоловічі Кросівки Nike Blazer Mid Suede</p>
              <b>5000 ₴</b>
            </div>
            <img className="removeBtn" width={32} height={32} src="/img/btn-remove.svg" alt="remove"/>
          </div>


        </div>


        <div className="items">
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Сума</span>
                <div></div>
                <b>15600 ₴.</b>
              </li>
              <li className="d-flex">
                <span>Податок 5%:</span>
                <div></div>
                <b>457 ₴</b>
              </li>
            </ul>
            <button className="greenButton">Оформити замовлення <img src="/img/arrow.svg" alt="arrow"/></button>
          </div>
        </div>

      </div>
    </div>
  )
}