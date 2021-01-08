import './styles.css'

import {ReactComponent as IconsInstagram } from './Instagram.svg'
import {ReactComponent as IconsLinkedin } from './Linkedin.svg'
import {ReactComponent as IconsYoutube } from './Youtube.svg'

function Footer() {
    return (
        <div>
            <footer className="main-footer">
                App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
                <div className="footer-icons">
                    <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                        <IconsYoutube />
                    </a>
                    <a href="https://www.linkedin.com/in/abner-wesley-ribeiro-6731bb171/" target="_new">
                        <IconsLinkedin />
                    </a>
                    <a href="https://www.instagram.com/abnerawr/?hl=pt-br" target="_new">
                        <IconsInstagram />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;

