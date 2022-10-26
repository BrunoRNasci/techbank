import logo from '../imagens/logo_branco.png'
import styles from '../Css/Header.module.css'
import lupa from '../imagens/lupa.png'

function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} alt="logo da pagina" className={styles.logo} />
            <nav className={styles.links}>
                <a href="#">Produtos</a>
                <a href="#">Serviços</a>
                <a href="#">Pessoa Física</a>
                <a href="#">Pessoa Jurídica</a>
            </nav>
           <div className={styles.campo_pesquisa}> 
                <input type="text" className={styles.input_pesquisa} value='Buscar' />
                <img src={lupa} alt="lupa" className={styles.lupa} />
            </div>
            <button className={styles.area_cliente}>
                Área do Cliente
            </button>
        </header>
    )
}

export default Header