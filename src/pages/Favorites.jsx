import React from 'react';
import {Card} from "../components/Card";


export const Favorites = ({favorites, onAddFavorite, onAddToCard}) => {


  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            id={item.id}
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            favorited={true}
            onFavorite={onAddFavorite}
            onPlus={onAddToCard}
          />))}
      </div>
    </div>
  );
}

