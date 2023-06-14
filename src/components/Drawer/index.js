import React from "react";
import styles from './Drawer.module.scss'
import {Info} from "../Info";

export const Drawer = ({onClose, items = [], onRemove}) => {

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className="items">
          <h2 className="mb-40 d-flex justify-between align-center ">
            Кошик
            <img className="removeBtn cu-p" onClick={onClose} width={32} height={32} src="/img/btn-remove.svg" alt="close"/>
          </h2>

          {items.length > 0 ?
            <div>
              {items.map((obj, index) => (
              <div key={index} className="cartItem d-flex align-center mb-20">
                <img
                  className="cartItemImg"
                  src={obj.imageUrl} alt="sneakers"/>
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} ₴</b>
                </div>
                <img onClick={() => onRemove(obj.id )} className="removeBtn" width={32} height={32} src="/img/btn-remove.svg" alt="remove"/>
              </div>
              ))}
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
            </div> : <Info onClose={onClose}/>
          }

        </div>
      </div>
    </div>
  )
}