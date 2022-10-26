import styles from '../Css/Section3.module.css'
import seta from '../imagens/seta.png'

function Section3(){
    return(
        <section className={styles.fundo_section3}>
            <div className={styles.previdencia}>
                <h1>Experimente nossos planos de providência privada</h1>
                <button className={styles.mais_info}>
                    Mais informações
                    <img src={seta} alt="" />
                </button>
            </div>
        </section>
    )
}

export default Section3