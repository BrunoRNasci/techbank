import styles from '../Css/Section1.module.css'
import seta from '../imagens/seta.png'

function Section1(){
    return(
        <section className={styles.img_fundo}>
            <div className={styles.tornar_cliente}>
                <h1>Torne-se um cliente TechBank</h1>
                <input type="text" value='Digite seu CPF' />
                <button className={styles.continuar}>
                    Continuar 
                    <img src={seta} alt="" />
                </button>
            </div>
            <div className={styles.solucoes}>
                <h1>Soluções tecnológicas para suas finanças</h1>
            </div>
        </section>
    )
}

export default Section1