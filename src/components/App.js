import { Routes, Route } from "react-router-dom";
import Catalog from './Catalog';
import Header from './Header';
import Carousel from './Carousel';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Carousel />} />
          <Route path='/catalog' element={<Catalog />} />
        </Routes>
    </>
  )
}

export default App;