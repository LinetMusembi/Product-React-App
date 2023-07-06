import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // fetch product with id from backend here
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <p>{product.discountPercentage}</p>
    </div>
  );
};

export default ProductDetailsPage;