import logo from '../images/ColorWheel.png';
import './header.css'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return(
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <h1>THE GLOBAL GOALS</h1>
                <h2>For sustainable Development</h2>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/"></NavLink></li>
                    <li><NavLink to="/sectionone">VERDENSMÅLENE</NavLink></li>
                    <li><NavLink to="/sectiontwo">DELMÅLENE</NavLink></li>
                    <li><NavLink to="/sectionthree">UDFORDRINGER</NavLink></li>
                    <li><NavLink to="/form">KONTAKT</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}