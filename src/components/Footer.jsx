import styles from '../Css/Footer.module.css'
import logo_footer from '../imagens/logo_escuro.png'
import logo_face from '../imagens/logo_face.png'
import logo_insta from '../imagens/logo_insta.png'
import logo_wpp from '../imagens/logo_wpp.png'
import logo_tt from '../imagens/logo_tt.png'



function Footer(){
    return(
        <footer>
            <img src={logo_footer} alt="logo footer" className={styles.logo_footer} />
           
            <div className={styles.redes_sociais}>
            <h1>Redes Sociais</h1>
                <img src={logo_face} alt="" />
                <img src={logo_insta} alt="" />
                <img src={logo_wpp} alt="" />
                <img src={logo_tt} alt="" />
            </div>
            <div className={styles.links_footer}>
                <div className={styles.links}>
                    <h1>Sobre Nós</h1>
                    <a href="#">Imprensa</a>
                    <a href="#">Perguntas Frequentes</a>
                    <a href="#">Carreiras</a>
                </div>
                <div className={styles.links}>
                    <h1>Produtos</h1>
                    <a href="#">Conta Digital</a>
                    <a href="#">Cartão Tech</a>
                    <a href="#">Previdência Privada</a>
                </div>
                <div className={styles.links}>
                    <h1>Fale Conosco</h1>
                    <a href="#">contato@techbank.com</a>
                    <a href="#">0800 999 9999</a>
                    <a href="#">Atendimento 24h</a>
                </div>
                <div className={styles.links}>
                    <h1>Trasnparência</h1>
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Política de Segurança</a>
                    <a href="#">Política de Compliance</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer