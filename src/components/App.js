import { Routes, Route } from "react-router-dom";
import Catalog from './Catalog';
import Header from './Header';
import Home from './Home';
import CatalogItem from './CatalogItem';
import Cart from './Cart';
import { useState } from 'react';

const App = () => {

  const [ cartItems, setCartItems ] = useState([]);
  const [ count, setCount ] = useState(0);

  const collect = (data) => {
    for (let item of cartItems) {
      if (item.name.toString() === data.name.toString()) {
        item.count += 1;
        setCartItems(cartItems.concat());
        setCount(count => count += 1)
        return;
      }
    }
    setCount(count => count += 1)
    setCartItems(cartItems.concat(data))  
  }

  const add = (e) => {
    for (let item of cartItems) {
      if (item.name.toString() === e.target.parentNode.parentNode.parentNode.id) {
        item.count += 1;
      }
    }
    setCount(count => count += 1)
    setCartItems(cartItems.splice(0))
  }

  const remove = (e) => {
    for (let item of cartItems) {
      if (item.name.toString() === e.target.parentNode.parentNode.parentNode.id) {
        if (item.count === 1) {
          setCartItems(cartItems.splice(cartItems.indexOf(item), 1))
        }
        else {
          item.count -= 1;
        }
      }
    }setCount(count => count -= 1)
    setCartItems(cartItems.concat())
  }

  const sum = () => {
    let sum = 0;
      for (let item of cartItems) {
        sum += item.price * item.count
      }
    return sum;
  }

  const checkout = () => {
    setCartItems([]);
  }


  return (
    <>
      <Header count={count} setCount={setCount}/>
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
      <Cart items={cartItems} setCount={setCount} count={count} add={add} sum={sum} remove={remove} checkout={checkout}/>
    </>
  )
}

export default App;