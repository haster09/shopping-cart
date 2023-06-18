import products from './products.js'
import CatalogItemTemplate from './CatalogItemTemplate';

const CatalogItem = ({type, collect}) => {

  let i = 0;

  const getData = (data) => {
    collect(data)
  }

  return (
  <>
    {products.map((product) => {
      if (type === '') {
        return <CatalogItemTemplate getData={getData} key={i++} product={product}/>
      }
      else if (product.type === type) {
        return <CatalogItemTemplate getData={getData} key={i++} product={product}/>
      }
      return false;
    }
    )}
  </>
  )
}

export default CatalogItem;