import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <Link to="/add-product">Add new product</Link>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
              <p>Price: {product.price} USD</p>
              <p>Discount: {product.discountPercentage}%</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;