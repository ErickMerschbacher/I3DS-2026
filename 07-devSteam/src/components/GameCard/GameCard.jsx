// IMPORTA O CSS MODULE
import styles from './GameCard.module.css'


// COMPONENTE
function GameCard(props){

  return(

    // CARD
    <div className={styles.card}>

      {/* IMAGEM */}
      <img
        src={props.image}

        className={styles['card-image']}

        alt="game"
      />

      {/* INFORMAÇÕES */}
      <div className={styles['card-info']}>

        {/* TÍTULO */}
        <h3>
          OFERTA EXCLUSIVA
        </h3>

        {/* ÁREA DOS PREÇOS */}
        <div className={styles['price-area']}>

          {/* DESCONTO */}
          <div className={styles.discount}>
            {props.discount}
          </div>

          {/* PREÇOS */}
          <div className={styles.prices}>

            {/* PREÇO ANTIGO */}
            <span className={styles['old-price']}>
              {props.oldPrice}
            </span>

            {/* PREÇO NOVO */}
            <span className={styles['new-price']}>
              {props.newPrice}
            </span>

          </div>

        </div>

        {/* BOTÃO */}
        <button className={styles['buy-btn']}>

          ADICIONAR AO CARRINHO

        </button>

      </div>

    </div>
  )
}


// EXPORTA
export default GameCard