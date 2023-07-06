import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () =>{

    })
  }, []);

  const handleAddProduct = async () => {
    try{
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
      setProducts(result.products); 
      setLoading(false);
    }
    catch(error){
      console.log(error.message);
    }

  };
console.log({products}); 
if (loading) {
  return <h1>Loading...</h1>
}

  return (
    
    <div>
   
      <h1>Products Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p> 
            <p>{product.price}</p> 
            <p>{product.discountPercentage}</p> 
          </Link>
        </div>
      ))}
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default ProductsPage;