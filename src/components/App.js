import { Routes, Route } from "react-router-dom";
import Catalog from './Catalog';
import Header from './Header';
import Home from './Home';
import CatalogItem from './CatalogItem';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} >
          <Route path='/catalog' index element={<CatalogItem type=""/>} />
          <Route path='/catalog/cpu' element={<CatalogItem type='cpu'/>} />
          <Route path='/catalog/gpu' element={<CatalogItem type='gpu'/>} />
          <Route path='/catalog/mobo' element={<CatalogItem type='mobo'/>} />
          <Route path='/catalog/ssd' element={<CatalogItem type='ssd'/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;