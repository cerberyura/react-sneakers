import React from "react";
import './Card.module.scss';


const onClickPlus= () => {
  alert('plus')
}
export const Card = ({title, price, imageUrl}) => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked"/>
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div>
          <div className="d-flex flex-column">
            <span>Ціна: </span>
            <b>{price} ₴</b>
          </div>
        </div>
        <button className="button" onClick={onClickPlus}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
        </button>
      </div>
    </div>
  )
}