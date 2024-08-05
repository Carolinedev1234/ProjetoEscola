import React from 'react';
import Product from './Product';

const ProductList = ({ category, addToCart }) => {
  const products = [
    { id: 1, name: 'Smartphone', price: 299.99, category: 'electronics' },
    { id: 2, name: 'Laptop', price: 999.99, category: 'electronics' },
    { id: 3, name: 'Camiseta', price: 19.99, category: 'fashion' },
    { id: 4, name: 'Sofá', price: 499.99, category: 'home' },
  ];

  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;