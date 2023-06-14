import CatalogNav from './CatalogNav';
import { Outlet } from 'react-router-dom';

const Catalog = () => {

  return (
    <div id='catalog'>
      <CatalogNav />
      <div className='catalogMain'>
        <Outlet/>
      </div>
    </div>
  );
}

export default Catalog;
