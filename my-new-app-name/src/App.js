// import './App.css';
import { Header } from './components/header/header'
import { SectionOne } from './components/section-one/section-one'
import { SectionTwo } from './components/section-two/section-two'
import { SectionThree } from './components/section-three/section-three'
import { Form } from './components/form/form'
import { Footer } from './components/footer/footer'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/App/AppRouter/AppRouter'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <AppRouter />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Form />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;