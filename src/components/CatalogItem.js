import products from './products.js'
import CatalogItemTemplate from './CatalogItemTemplate';

const CatalogItem = ({type}) => {

  let i = 0;

  return (
  <>
    {products.map((product) => {
      if (type === '') {
        return <CatalogItemTemplate key={i++} product={product}/>
      }
      else if (product.type === type) {
        return <CatalogItemTemplate key={i++} product={product}/>
      }
      return false;
    }
    )}
  </>
  )
}

export default CatalogItem;