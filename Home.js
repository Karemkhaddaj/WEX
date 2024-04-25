import React, { useState } from 'react'
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import Account from './Account';
import Logout from './Logout';

function Home() {

    const [selectedItem, setSelectedItem] = useState(null);

    function handleClick(item) {
        setSelectedItem(item);
    }

    return (
        <div className="home-container">
            <Navbar onItemClick={handleClick} />
            <div className="content">
                {selectedItem === 'buying' && <BuyingItems />}
                {selectedItem === 'selling' && <SellingItems />}
                {selectedItem === 'account' && <Account />}
                {selectedItem === 'logout' && <Logout />}
            </div>
        </div>
    );
}

const Navbar = ({ onItemClick }) => {
    return (
        <nav className="navbar">
            <div className="profile-circle">
                <img src={sessionStorage.getItem("pfp")} alt="Profile" />
            </div>
            <ul className="navbar-list">
                <li className="navbar-item" onClick={() => onItemClick('buying')}>Buying</li>
                <li className="navbar-item" onClick={() => onItemClick('selling')}>Selling</li>
                <li className="navbar-item" onClick={() => onItemClick('account')}>My Account</li>
                <li className="navbar-item" onClick={() => onItemClick('logout')}>Log Out</li>
            </ul>
        </nav>
    );
};
const BuyingItems = () => {
    return (
        <div>
            {/* Content for Buying Items */}
            <h2>Buying Items</h2>
            <p>List of items available for purchase...</p>
        </div>
    );
};
const SellingItems = () => {
    return (
        <div>
            {/* Content for Selling Items */}
            <h2>Selling Items</h2>
            <p>List of items available for sale...</p>
        </div>
    );
};
export default Home