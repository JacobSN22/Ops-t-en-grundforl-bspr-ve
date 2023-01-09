import './section-two.css';
import goalone from '../images/Goals/Goal-No-Poverty.png'
import goaltwo from '../images/Goals/Goal-No-Hunger.png'
import goalthree from '../images/Goals/Goal-Good-Health.png'
import goalfour from '../images/Goals/Goal-Good-Education.png'
import goalfive from '../images/Goals/Goal-Gender-Equality.png'
import goalsix from '../images/Goals/Goal-Clean-Water.png'
import goalseven from '../images/Goals/Goal-Clean-Energy.png'
import goaleight from '../images/Goals/Goal-Decent-Work.png'
import goalnine from '../images/Goals/Goal-Industry.png'
import goalten from '../images/Goals/Goal-Inequalities.png'
import goaleleven from '../images/Goals/Goal-Sustainable-Cities.png'
import goaltwelve from '../images/Goals/Goal-Responsible-Consumption.png'
import goalthirteen from '../images/Goals/Goal-Climate-Action.png'
import goalfourteen from '../images/Goals/Goal-Life-Water.png'
import goalfifteen from '../images/Goals/Goal-Life-Land.png'
import goalsixteen from '../images/Goals/Goal-Institutions.png'
import goalseventeen from '../images/Goals/Goal-Partnership.png'
import goal from '../images/Goals/Global-Goals.png'

export const SectionTwo = () => {
    return(
        <section>
            <div>
                <h3>DE 17 VERDENSMÅL</h3>
                <a href="">Tilbage til top</a>
                <h5>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.</h5>
                <p>Se eksempler på enkelte delmål her:</p>
            </div>

            <div>
            <img src={goalone} className="App-logo" alt="logo" />
            <img src={goaltwo} className="App-logo" alt="logo" />
            <img src={goalthree} className="App-logo" alt="logo" />
            <img src={goalfour} className="App-logo" alt="logo" />
            <img src={goalfive} className="App-logo" alt="logo" />
            <img src={goalsix} className="App-logo" alt="logo" />
            <img src={goalseven} className="App-logo" alt="logo" />
            <img src={goaleight} className="App-logo" alt="logo" />
            <img src={goalnine} className="App-logo" alt="logo" />
            <img src={goalten} className="App-logo" alt="logo" />
            <img src={goaleleven} className="App-logo" alt="logo" />
            <img src={goaltwelve} className="App-logo" alt="logo" />
            <img src={goalthirteen} className="App-logo" alt="logo" />
            <img src={goalfourteen} className="App-logo" alt="logo" />
            <img src={goalfifteen} className="App-logo" alt="logo" />
            <img src={goalsixteen} className="App-logo" alt="logo" />
            <img src={goalseventeen} className="App-logo" alt="logo" />
            <img src={goal} className="App-logo" alt="logo" />
            </div>
        </section>
    )
}