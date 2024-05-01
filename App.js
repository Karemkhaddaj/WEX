import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './Test';
import ForgotPassword from './ForgotPassword';
import { ToastContainer } from 'react-toastify';
import Logout from './Logout';
import Account from './Account';
import BrowsingItems from './BrowsingItems';
import ItemDetails from './ItemDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Browsing" element={<BrowsingItems />} />
          <Route path="/item/:itemId" element={<ItemDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
