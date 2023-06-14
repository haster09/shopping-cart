import { Routes, Route } from "react-router-dom";
import Catalog from './Catalog';
import Header from './Header';
import Carousel from './Carousel';
import CatalogMain from './CatalogMain';
import CatalogCPU from './CatalogCPU';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Carousel />} />
        <Route path='/catalog' element={<Catalog />} >
          <Route path='/catalog' index element={<CatalogMain />} />
          <Route path='/catalog/cpu' element={<CatalogCPU />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;