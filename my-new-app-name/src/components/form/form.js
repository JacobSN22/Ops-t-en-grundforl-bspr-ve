import fnicon from '../images/UN-Logo-Large.png'
import './form.scss';

export const Form = () => {
    return(
        <div>
            <h3>KONTAKT OS</h3>
            <a href="">Tilbage til top</a>
            <h5>Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:</h5>
            
            <div>
                <img src={fnicon} className="App-logo" alt="logo" />
                
                <form>
                    <input type="text"></input>
                    <input type="text"></input>
                    <input type="text"></input>
                    <textarea cols="30" rows="10"></textarea>
                    <div>
                        <button>FORTRYD</button>
                        <button>SEND</button> 
                    </div>
                </form>
            </div>
        </div>
    )
}

