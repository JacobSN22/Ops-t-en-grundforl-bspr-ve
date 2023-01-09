import logo from '../images/ColorWheel.png';

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
                    <li><a href="">VERDENSMÅLENE</a></li>
                    <li><a href="">DELMÅLENE</a></li>
                    <li><a href="">UDFORDRINGER</a></li>
                    <li><a href="">KONTAKT</a></li>
                </ul>
            </nav>
        </header>
    )
}