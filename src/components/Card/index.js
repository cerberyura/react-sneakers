import React from "react";
import styles from './Card.module.scss';

export const Card = ({title, price, imageUrl, onPlus}) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const [liked, setLiked] = React.useState(false);

  const onClickPlus= () => {
    onPlus({title, price, imageUrl});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    setLiked(!liked);
  }


  return (
    <div className={styles.card}>
      <div onClick={onClickFavorite} className={styles.favorite}>
        <img src={liked ? "img/liked.svg" : "/img/unliked.svg" } alt="unliked"/>
      </div>
      <img  width={133} height={112} src={imageUrl} alt="Sneakers"/>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div>
          <div className="d-flex flex-column">
            <span>Ціна: </span>
            <b>{price} ₴</b>
          </div>
        </div>
        <img className={styles.plus}  src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" onClick={onClickPlus}/>
      </div>
    </div>
  )
}