import product01 from '../images/product01.webp'
import product02 from '../images/product02.webp'
import product03 from '../images/product03.webp'
import product04 from '../images/product04.webp'
import product05 from '../images/product05.webp'
import product06 from '../images/product06.webp'

const products = [
  {
    id: 1,
    name: 'Intel Core i5 13600K',
    price: '309.99$',
    image: product01,
    discount: true,
    previousPrice: '329.00$'
  },
  {
    id: 2,
    name: 'AMD Ryzen 7 7800X3D',
    price: '439.00$',
    image: product02,
    discount: false,
  },
  {
    id: 3,
    name: 'Intel Core i9 13900K',
    price: '568.99$',
    image: product03,
    discount: true,
    previousPrice: '629.99$'
  },
  {
    id: 4,
    name: 'AMD Ryzen 5 7600',
    price: '219.99$',
    image: product04,
    discount: false,
  },
  {
    id: 5,
    name: 'Intel Core i5 12400F',
    price: '150.99$',
    image: product05,
    discount: true,
    previousPrice: '206.99$'
  },
  {
    id: 6,
    name: 'Intel Core i3 12100F',
    price: '89.99$',
    image: product06,
    discount: true,
    previousPrice: '99.99$'
  }
]

export default products;