import {Header} from "./components/Header";
import axios from "axios";
import {Drawer} from "./components/Drawer";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Favorites} from "./pages/Favorites";
import {Home} from "./pages/Home";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {

    // fetch('https://640a6cbc65d3a01f98fecb0f.mockapi.io/sneakers')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json)
    //   })

    // запрос на получення всіх моїх красовок////////////
    axios.get('https://640a6cbc65d3a01f98fecb0f.mockapi.io/sneakers').then(res => {
      setItems(res.data)
    });
    // запрос на получення всії даних з корзини////////////////
    // axios.get('https://640a6cbc65d3a01f98fecb0f.mockapi.io/items').then(res => {
    //   setCartItems(res.data)
    // })

  }, []);

  const onAddToCard = (obj) => {
    // добавляємо дані з корзини в api на сервер/////////////////
    // axios.post('https://640a6cbc65d3a01f98fecb0f.mockapi.io/items', obj);
    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    console.log(id)
    // видаляємо дані з корзини в api на сервер не працює добре бо треба все розкоментувати і підключити API/////////////////
    //  axios.delete(`https://640a6cbc65d3a01f98fecb0f.mockapi.io/items/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddFavorite = (obj) => {
    // //
    // if (favorites.find((FavObj) => FavObj.id === obj.id)) {
    //   // axios.delete(`https://640a6cbc65d3a01f98fecb0f.mockapi.io/items/${obj.id}`);
    //   // setFavorites((prev) => prev.filter(item => item.id !== obj.id))
    // } else {
    //    // axios.post('https://640a6cbc65d3a01f98fecb0f.mockap i.io/items', obj);
    //   setFavorites((prev) => [...prev, obj]);
    // }

    setFavorites((prev) => [...prev, obj]);

  };


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const searchClear = () => {
    setSearchValue('')
  }


  return (<>

    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <Routes>
        <Route path="/"
               element={<Home items={items}
                              searchValue={searchValue}
                              setSearchValue={setSearchValue}
                              searchClear={searchClear}
                              onAddFavorite={onAddFavorite}
                              onChangeSearchInput={onChangeSearchInput}
                              onAddToCard={onAddToCard}/>}/>
        <Route path="/favorites"
               element={<Favorites
                 favorites={favorites}
                 onAddFavorite={onAddFavorite}
                 onAddToCard={onAddToCard}
               />}/>

      </Routes>


    </div>


  </>);
}

export default App;
