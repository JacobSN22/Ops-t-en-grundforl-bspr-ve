import './footer.scss'
import fnlogo from '../images/Partner-UNDP-Full.png'

export const Footer = () => {
    return(
        <footer>
            <div>
                <h3>Eksterne Links</h3>
                <a href="">https://www.verdensmaalene.dk/</a>
                <a href="">https://www.globalgoals.org/</a>
                <a href="">https://www.un.org/sustainabledevelopment/</a>
                <a href="">https://worldslargestlesson.globalgoals.org/</a>
                <a href="">https://www.unenvironment.org/</a>
                <a href="">https://ve.dk/klimaberegner/</a>
            </div>

            <div>
                <h3>Ressourcer:</h3>
                <a href="">Bliver Verden Bedre</a>
                <a href="">Spotlight Rapport</a>
            </div>

            <div>
                <img src={fnlogo} className="App-logo" alt="logo" />
            </div>
        </footer>
    )
}