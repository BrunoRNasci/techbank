import styles from '../Css/Section2.module.css'
import seta_escura from '../imagens/seta_escura.png'
import cartoes from '../imagens/vetor_cartoes.png'

function Section2(){
    return(
        <section className={styles.fundo_section2}>
            <div className={styles.conheca_cartoes}>
                <h1>Conheça nossos cartões</h1>
                <p>Descubra as vantagens dos cartões Tech</p>
                <button className={styles.peca_seu}>
                    Peça já o seu
                    <img src={seta_escura} alt="" />
                </button>
                <img src={cartoes} alt="" className={styles.vetor_cartoes} />
            </div>
        </section>
    )
}

export default Section2