import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     {/* <Movies/> */}
    <BrowserRouter>
    <Navbar/>

    <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>

    </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
