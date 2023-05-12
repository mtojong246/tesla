import './App.css';
import Nav from './Routes/Nav/nav.component';
import Home from './Routes/Home/home.component';
import Menu from './Components/Menu/menu.component';
import { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  }


  return (
    <>
      <Nav toggleMenu={toggleMenu}/>
      <Home />
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
    </>
  );
}

export default App;
