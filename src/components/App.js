import Home from '../components/Home';
import Shop from '../components/Shop';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div id='header'>
        <div className='title'>COMPUTER HARDWARE</div>
        <div className='navBar'><span className="material-icons-outlined">store</span></div>
      </div>
      <div id='content'>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Shop />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
