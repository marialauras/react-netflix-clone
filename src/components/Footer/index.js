import React from 'react';
import './styles.css';

function Footer(){
    return(
       <footer id="footer_cp">
           <section>
                <p>Contato</p>
                <p>Perguntas Frequentes</p>
                <p>Ultimas Noticias</p>
           </section>

           <section>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
           </section>

           <section>
                <p>Blog</p>
                <p>Patrocinadores</p>
                <p>Afiliados</p>
           </section>

           <section>
                <p>Desenvolvido por: Maria Laura | Direitos de Imagem: Netflix | API: The movie DB</p>
            </section>


       </footer>
    )
}

export default Footer;