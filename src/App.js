import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import {Card} from "./components/Card";

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

          <div className="d-flex">
            <Card/>
          </div>
        </div>

      </div>


    </>
  );
}

export default App;
