import {Card} from "../components/Card";
import React from "react";

export const Home = ({searchValue, items, searchClear, onAddFavorite, onChangeSearchInput, onAddToCard}) => {
  return (
    <div className="content p-40">
      <div className="d-flex mb-40 justify-between ">
        <h1>{searchValue ? `Пошук по запиту: "${searchValue}"` : 'Всі кросівки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search"/>
          {searchValue &&
            <img onClick={searchClear} className="clear cu-p" width={32} height={32} src="/img/btn-remove.svg"
                 alt="Clear"/>}
          <input type="text" onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук..."/>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={(obj) => onAddFavorite(obj)}
            onPlus={(obj) => onAddToCard(obj)}
          />))}

      </div>
    </div>
  )
}