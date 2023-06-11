import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import {Card} from "./components/Card";
import React from "react";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems,  setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect( () => {
    fetch('https://640a6cbc65d3a01f98fecb0f.mockapi.io/sneakers')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json)
      })
  }, []);

  const onAddToCard = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  console.log(cartItems)


  return (<>
      <div className="wrapper clear">

        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)}/>
        <div className="content p-40">
          <div className="d-flex mb-40 justify-between ">
            <h1>Всі кросівки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="search"/>
              <input type="text" placeholder="Пошук..."/>
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {
              items.map((obj, index) => (
                <Card
                  key={index}
                  title={obj.title}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  onPlus={onAddToCard}
                />
              ))
            }

          </div>
        </div>

      </div>


    </>
  );
}

export default App;
