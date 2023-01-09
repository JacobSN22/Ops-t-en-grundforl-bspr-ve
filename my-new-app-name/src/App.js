import './App.css';
import { Header } from './components/header/header'
import { SectionOne } from './components/section-one/section-one'
import { SectionTwo } from './components/section-two/section-two'
import { SectionThree } from './components/section-three/section-three'
import { Form } from './components/form/form'
import { Footer } from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Form />
      <Footer />
    </div>
  );
}

export default App;