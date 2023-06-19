import { Routes, Route } from "react-router-dom";
import Catalog from './Catalog';
import Header from './Header';
import Home from './Home';
import CatalogItem from './CatalogItem';
import Cart from './Cart';
import { useState } from 'react';

const App = () => {

  const [ cartItems, setCartItems ] = useState([]);

  const collect = (data) => {
    for (let item of cartItems) {
      if (item.name === data.name) {
        item.count += 1;
        setCartItems(cartItems.concat())
        return;
      }
    }
    setCartItems(cartItems.concat(data))  
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} >
          <Route path='/catalog' index element={<CatalogItem type="" collect={collect}/>} />
          <Route path='/catalog/cpu' element={<CatalogItem type='cpu' collect={collect}/>} />
          <Route path='/catalog/gpu' element={<CatalogItem type='gpu' collect={collect}/>} />
          <Route path='/catalog/mobo' element={<CatalogItem type='mobo' collect={collect}/>} />
          <Route path='/catalog/ssd' element={<CatalogItem type='ssd' collect={collect}/>} />
        </Route>
      </Routes>
      <Cart items={cartItems}/>
    </>
  )
}

export default App;