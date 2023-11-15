import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import WebList from './components/WebList/WebList'
import DesignList from './components/DesignList/DesignList'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import ContactUs from './components/ContactUs/ContactUs'

function App() {
  return (
    <div className="App body-background">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="webs" element={<WebList />}></Route>
          <Route path="designs" element={<DesignList />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
