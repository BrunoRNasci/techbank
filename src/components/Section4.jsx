import styles from '../Css/Section4.module.css'
import financ from '../imagens/icon_financiamento.png'
import seta from '../imagens/seta.png'
import poupanca from '../imagens/icon_poupanca.png'
import pagamentos from '../imagens/icon_pagamento.png'

function Section4(){
    return(
        <section className={styles.fundo_section4}>
            <div className={styles.acesso}>
            <ul >
                <li><p>Acesso Rápido</p></li>
            </ul>
            </div>
           <div className={styles.acesso_rapido}>
           <div className={styles.caixa_acesso_rapido}>
                <img src={financ} alt="" className={styles.icon_finc}/>
                <h1>Financiamento</h1>
                <button>
                    Ir a página
                    <img src={seta} alt="" className={styles.seta}/>
                </button>
            </div>
            <div className={styles.caixa_acesso_rapido}>
                <img src={poupanca} alt="" className={styles.icon_finc}/>
                <h1>Planos de poupança</h1>
                <button>
                    Ir a página
                    <img src={seta} alt="" className={styles.seta}/>
                </button>
            </div>
            <div className={styles.caixa_acesso_rapido}>
                <img src={pagamentos} alt="" className={styles.icon_finc}/>
                <h1>Financiamento</h1>
                <button>
                    Ir a página
                    <img src={seta} alt="" className={styles.seta}/>
                </button>
            </div>
           </div>
        </section>
    )
}

export default Section4