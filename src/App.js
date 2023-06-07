import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import {Card} from "./components/Card";

const arr = [
  {
    title: 'Чоловічі Кросівки Nike Blazer Mid Suede',
    price: 5500,
    imageUrl: '/img/sneakers/1.jpg'
  },
  {
    title: 'Чоловічі Кросівки Nike Air Max 270',
    price: 3400,
    imageUrl: '/img/sneakers/2.jpg'

  },
  {
    title: 'Чоловічі Кросівки Nike Blazer Mid Suede white',
    price: 1200,
    imageUrl: '/img/sneakers/3.jpg'
  },
  {
    title: 'Чоловічі Кросівки Puma X Aka Boku Future Rider',
    price: 7100,
    imageUrl: '/img/sneakers/4.jpg'
  },
]

const App = () => {
  return (<>
      <div className="wrapper clear">
        <Drawer/>
        <Header/>
        <div className="content p-40">
          <div className="d-flex mb-40 justify-between ">
            <h1>Всі кросівки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="search"/>
              <input type="text" placeholder="Пошук..."/>
            </div>
          </div>

          <div className="d-flex ">
            {
              arr.map((obj) => (
                <Card
                  title={obj.title}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
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
