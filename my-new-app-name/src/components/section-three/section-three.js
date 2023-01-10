import './section-three.css'
import sustainability from '../images/Image-Sustainability.jpg'
import leavenoone from '../images/Image-Leave-No-One.jpg'
import Hunger from '../images/Image-Hunger.jpg'

export const SectionThree = () => {
    return(
        <main>
        <section className="sectionThree">
            <a href="">Tilbage til top</a>
            <h3>UDFORDRINGER</h3>
            <h5>Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til.</h5>

            <div className="artOne">
                <div>
                    <h4>Vækst vs. bæredygtighed.</h4>
                    <p>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund. <br></br><br></br>
                        Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.<br></br><br></br>
                        De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.</p>
                </div>
                <div>
                    <img src={sustainability} className="App-logo" alt="logo" />
                </div>
            </div>


            <div className="artOne">
                <div>
                    <h4>Leave no-one behind.</h4>
                    <p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.<br></br><br></br>
                        Arbejdet med verdensmålene skal begynde med, at de
                        fattigste og mest marginaliserede adresseres først.<br></br><br></br>
                        Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.
                        Med andre ord: “Leave No-One behind”.</p>
                </div>
                <div>
                    <img src={leavenoone} className="App-logo" alt="logo" />
                </div>
            </div>


            <div className="artOne">
                <div>
                    <h4>Fattigdom og sult.</h4>
                    <p>Det første af FN’s verdensmål handler om at afskaffe verdens fattigdom inden 2030.<br></br><br></br>
                        Det handler især om at give muligheder for mennesker i verdens fattigste lande. Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner.<br></br><br></br>
                        En stor udfordring, men vi er allerede godt på vej.</p>
                </div>
                <div>
                    <img src={Hunger} className="App-logo" alt="logo" />
                </div>
            </div>
        </section>
        </main>
    )
}