// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const NewProductFormPage = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const history = useHistory();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // send a POST request with the form data to backend here
//     history.push('/products');
//   };

//   return (
//     <div>
//       <h1>New Product Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//         <label htmlFor="description">Description:</label>
//         <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
//         <label htmlFor="price">Price:</label>
//         <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
//         <label htmlFor="image">Image URL:</label>
//         <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
//         <button type="submit">Create Product</button>
//       </form>
//     </div>
//   );
// };

// export default NewProductFormPage