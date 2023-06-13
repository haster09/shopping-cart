import products from './products';
import CatalogItem from './CatalogItem';

const Catalog = () => {

  return (
    <div id='catalog'>
      <div className='catalogNav'>
        <div className='catalogNavTitle'>PARTS</div>
      </div>
      <div className='catalogContent'>{products.map((product) => {
        return <CatalogItem product={product}/>
      })}</div>
    </div>
  );
}

export default Catalog;
