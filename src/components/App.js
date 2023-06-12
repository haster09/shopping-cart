import Home from '../components/Home';
import Catalog from '../components/Catalog';
import { HashRouter, Routes, Route } from "react-router-dom";
import cart_svg from '../images/shopping-cart.svg'

const App = () => {
  return (
    <>
      <div id='header'>
        <div className='title'>COMPUTER HARDWARE</div>
        <div className='navBar'>
          <div className='navItem'>CATALOG</div>
          <div className='navItem'><img className='icon' src={cart_svg} alt='shopping-cart'/></div>
        </div>
      </div>
      <div id='content'>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
          </Routes>
        </HashRouter>
      </div>
      <div id='footer'></div>
    </>
  );
}

export default App;
