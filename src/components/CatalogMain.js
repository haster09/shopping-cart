import products from './products';
import CatalogItem from './CatalogItem';

const CatalogMain = () => {

  let j = 0;

  return (
    <>
      {products.map((product) => {
        return <CatalogItem key={j++} product={product}/>
      })};
    </>
  )
}

export default CatalogMain;