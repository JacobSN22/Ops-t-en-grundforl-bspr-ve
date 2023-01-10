import fnicon from '../images/UN-Logo-Large.png'
import './form.css';

export const Form = () => {
    return(
        <main>
        <div className="formSection">
            <a href="">Tilbage til top</a>
            <h3>KONTAKT OS</h3>
            <h5>Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:</h5>
            
            <div className="formGrid">
                <img src={fnicon} className="App-logo" alt="logo" />
                
                <form>
                    <input type="text" placeholder="Indtast dit fulde navn"></input>
                    <input type="text" placeholder="Indtast gyldig E-mail"></input>
                    <input type="text" placeholder="Indtast Telefonnummer"></input>
                    <textarea cols="30" rows="10" placeholder="Evt. Besked"></textarea>
                    <div className="buttons">
                        <button className="butOne">FORTRYD</button>
                        <button className="butTwo">SEND</button> 
                    </div>
                </form>
            </div>
        </div>
        </main>
    )
}

