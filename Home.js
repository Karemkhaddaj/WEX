import React, { useState } from 'react'
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import Account from './Account';
import Logout from './Logout';
import BrowsingItems from './BrowsingItems';
import ItemDetails from './ItemDetails';

function Home() {

    const [selectedItem, setSelectedItem] = useState(null);
    const [itemDetails, setItemDetails] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    function handleItemClick(itemType) {
        setSelectedItem(itemType);
    }
    function handleItemSelect(item) {
        setItemDetails(item);
        setShowDetailsModal(true);
    }
    function handleCloseModal() {
        setShowDetailsModal(false);
    }

    return (
        <div className="home-container">
            <Navbar onItemClick={handleItemClick} />
            <div className="content">
                {selectedItem === 'buying' && <BrowsingItems onItemSelected={handleItemSelect} />}
                {selectedItem === 'selling' && <SellingItems />}
                {selectedItem === 'account' && <Account />}
                {selectedItem === 'logout' && <Logout />}
                {showDetailsModal && <ItemDetails item={itemDetails} onClose={handleCloseModal} />}
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