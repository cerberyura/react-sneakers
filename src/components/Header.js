export const Header = () => {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className='logo' src="/img/logo.png" alt="logo"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин кращих кросівок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img className="icon" src="/img/cart.svg" alt="cart"/>
            <span>1205 ₴</span>
          </li>

          <li>
            <img className="icon" src="/img/user.svg" alt="user"/>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Всі коросівки</h1>

        <div className="d-flex">
          <div className="card">
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
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
        </div>
      </div>

    </div>

  )
}