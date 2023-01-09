import './App.css';
import { Header } from './components/header/header'
import { SectionOne } from './components/section-one/section-one'
import { SectionTwo } from './components/section-two/section-two'
import { SectionThree } from './components/section-three/section-three'

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;