import React, { useState } from 'react';
import ProductList from './components/ProductList';

  const initialProducts = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Phone', price: 699, inStock: false },
    { id: 3, name: 'Tablet', price: 499,inStock: true }
  ];

  const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleRemove = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const filteredProducts = products;


  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  )
}

export default App
