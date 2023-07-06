import './App.css';
import Products from './Products';
import Navbar from './Navbar';
// import Form from './Form';
// import ProductDetailsPage from './ShowProduct';
import LoginPage from './LoginPage';
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Productsinfo from './ShowProduct';


function App() {
  return (
    <div >
     <Navbar/>
     
     <LoginPage/>
      <BrowserRouter>
      <Routes>
       <Route index element={<Products/>}/>
       <Route path='/home' element={<Products/>}/>
       {/* <Route path='/information/:productId' element={<Productsinfo/>}/> */}
       {/* <Route path='/form' element={<Form/>}/>
       <Route path='/login' element={<Login/>}/> */}

        </Routes>
        </BrowserRouter> 
    </div>
  ); 
}

export default App;