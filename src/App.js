import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import AboutUs from './components/AboutUs/AboutUs'
import Projects from './components/Projects/Projects'
import ContactUs from './components/ContactUs/ContactUs'
import OurTeam from './components/OurTeam/OurTeam'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AboutUs />
        <Projects />
        <OurTeam />
        <ContactUs />
        <Routes>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
