import products from './products.js'
import CatalogItem from './CatalogItem';

const CatalogCPU = () => {

  let i = 0;

  return (
  <>
    {products.map((product) => {
      if (product.type === 'cpu') {
        return <CatalogItem key={i++} product={product}/>
      }
    }
    )}
  </>
  )
}

export default CatalogCPU;