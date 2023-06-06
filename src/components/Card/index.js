import React from "react";
import './Card.module.scss';
export const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked"/>
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
      <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div>
          <div className="d-flex flex-column">
            <span>Ціна: </span>
            <b>5000 ₴</b>
          </div>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
        </button>
      </div>
    </div>
  )
}