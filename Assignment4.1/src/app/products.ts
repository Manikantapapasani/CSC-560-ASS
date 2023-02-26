export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Iphone X',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 599,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'MicroMax',
    price: 299,
    description: ''
  },
  {
    id: 4,
    name: 'Asus A6',
    price: 299,
    description: 'Greater Performance'
  }
];
