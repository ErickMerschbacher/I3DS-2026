
import { useState } from 'react'
import logo from './assets/logo.png'
import dotaPng from './assets/dota-2.png'
import valorantPng from './assets/valorant.png'
import lolPng from './assets/league-of-legends.png'
import csgoPng from './assets/counter-strike.png'
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <>
      
<div className="header-container">
  <img src={logo} className="logo" alt="Logo" />
  <h2 className="title">DevSteam</h2>
</div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar"
            className="search"
          />
        </div>
        <div className="cart">🛒</div>
<h2>PROMOÇÕES</h2>
      <section id="center">
        <div className="promo">
          <div className='game-card'>
            <img src={lolPng} className="base" alt="LoL" />
            <div className='info-box'>
              <p>LEAGUE OF LEGENDS</p>
            <div className='preco-container'>
              <div className="discount-badge">-50%</div>
              <span className='velho-preco'>R$ 100,00</span>
              <span className='novo-preco'>R$ 50,00</span>
              </div>
              <button className='Compra' onClick={() => console.log('Adicionado!')}>
                ADICIONAR AO CARRINHO
              </button>

            </div>
           </div>

             <div>
              {/*CARD DOTA 2*/}
              <div className='game-card'>
              <img src={dotaPng} className="base" alt="Dota 2" />
               <div className='info-box'>
              <p>DOTA 2</p>
             <div className='preco-container'>
              <div className="discount-badge">-50%</div>
              <span className='velho-preco'>R$ 100,00</span>
              <span className='novo-preco'>R$ 50,00</span>
              </div>
               <button className='Compra' onClick={() => console.log('Adicionado!')}>
                ADICIONAR AO CARRINHO
              </button>
              </div>
              </div>

</div>
          {/*Card Valorant*/}
              <div className='game-card'>
                <img src={valorantPng} className="base" alt="Valorant" />
                 <div className='info-box'>
                  <p>VALORANT</p>
                 <div className='preco-container'>
                  <div className="discount-badge">-50%</div>
              <span className='velho-preco'>R$ 100,00</span>
              <span className='novo-preco'>R$ 50,00</span>
              </div>
              <button className='Compra' onClick={() => console.log('Adicionado!')}>
                ADICIONAR AO CARRINHO
              </button>   
</div>

              </div>
          
        </div>
        <div className='outros'>
          <h3>OUTROS JOGOS</h3>

          <img src={csgoPng} className='base' width="180" height="90" ></img>

          <div></div> <img src={csgoPng} className='base' width="180" height="90" ></img>
            <div></div> <img src={csgoPng} className='base' width="180" height="90" ></img>
            <div></div> <img src={csgoPng} className='base' width="180" height="90" ></img>
        </div>
       
      </section>
    </>
  )
}

export default App