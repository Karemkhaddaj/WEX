import React from 'react';
import './ItemDetails.css'

const ItemDetails = ({ item, onClose }) => {
    if (!item) {
        return null;  // Or display some default message or loading state
    }

    return (
        <div className="item-details-overlay">
            <div className="item-details-modal">
                <button className="item-details-close" onClick={onClose}>&times;</button>
                <div className="item-details-content">
                    <div className="item-details-image-wrapper">
                        <img src={item.image} alt={item.Description} />
                    </div>
                    <div className="item-details-info">
                        <h1>{item.Title || "Item Details"}</h1>
                        <p className="item-description">{item.Description}</p>
                        <p className="item-price">Price: {item.price}</p>
                        <p className="item-seller">Seller: {item.username}</p>
                        {/* More details here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
