import product01 from '../images/product01.webp'
import product02 from '../images/product02.webp'
import product03 from '../images/product03.webp'
import product04 from '../images/product04.webp'
import product05 from '../images/product05.webp'
import product06 from '../images/product06.webp'
import product07 from '../images/product07.webp'
import product08 from '../images/product08.webp'
import product09 from '../images/product09.webp'
import product10 from '../images/product10.webp'
import product11 from '../images/product11.webp'
import product12 from '../images/product12.webp'

const products = [
  {
    id: 1,
    name: 'Intel Core i5 13600K',
    type: 'cpu',
    price: 309.99,
    image: product01,
    discount: true,
    previousPrice: 329.99
  },
  {
    id: 2,
    name: 'MSI B550 GAMING X V2',
    type: 'mobo',
    price: 109.99,
    image: product02,
    discount: false,
  },
  {
    id: 3,
    name: 'AMD Ryzen 7 7800X3D',
    type: 'cpu',
    price: 439.99,
    image: product03,
    discount: false,
  },
  {
    id: 4,
    name: 'GIGABYTE B550 AORUS PRO V2',
    type: 'mobo',
    price: 119.99,
    image: product04,
    discount: false,
  },
  {
    id: 5,
    name: 'Intel Core i9 13900K',
    type: 'cpu',
    price: 568.99,
    image: product05,
    discount: true,
    previousPrice: 629.99
  },
  {
    id: 6,
    name: 'AMD Ryzen 5 7600',
    type: 'cpu',
    price: 219.99,
    image: product06,
    discount: false,
  },
  {
    id: 7,
    name: 'MSI RTX 4090 GAMING X TRIO',
    type: 'gpu',
    price: 999.99,
    image: product07,
    discount: false,
  },
  {
    id: 8,
    name: 'GIGABYTE RTX 4070 Ti GAMING OC',
    type: 'gpu',
    price: 599.99,
    image: product08,
    discount: false,
  },
  {
    id: 9,
    name: 'Intel Core i5 12400F',
    type: 'cpu',
    price: 150.99,
    image: product09,
    discount: true,
    previousPrice: 206.99
  },
  {
    id: 10,
    name: 'Intel Core i3 12100F',
    type: 'cpu',
    price: 89.99,
    image: product10,
    discount: true,
    previousPrice: 99.99
  },
  {
    id: 11,
    name: 'ASUS RX 7900 XTX TUF GAMING',
    type: 'gpu',
    price: 799.99,
    image: product11,
    discount: false,
  },
  {
    id: 12,
    name: 'SAMSUNG 980 PRO 1TB',
    type: 'ssd',
    price: 49.99,
    image: product12,
    discount: false,
  }
]

export default products;