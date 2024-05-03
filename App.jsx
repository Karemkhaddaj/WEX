import './App.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import ChatList from './components/Chat/ChatList';
import ForgotPassword from './components/Authentication/ForgotPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatInit from './components/Chat/ChatInit';
import MyAccount from './components/MyAccount/MyAccount';
import SellProduct from './components/Product/SellProduct';
import Product from './components/Product/Product';
import MyProducts from './components/Product/MyProducts';
import ProductInfo from './components/Product/ProductInfo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Product />} />
        <Route path="/chatinit" element={<ChatInit />} />
        <Route path="/inbox" element={<ChatList />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/myaccount" Component={MyAccount} />
        <Route path="/sellproduct" Component={SellProduct} />
        <Route path="/product" Component={Product} />
        <Route path="/myproducts" element={<MyProducts />} />
        <Route path="/productinfo/:item" element={<ProductInfo />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
