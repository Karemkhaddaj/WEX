import React, { useState, useEffect } from 'react';
import "./BrowsingItems.css";

function BrowsingItems({ onItemSelected }) { // onItemSelected is passed as a prop from Home
    const [categ, setCateg] = useState('');
    const [items, setItems] = useState([]);
    const categories = ['car', 'appliance', 'electronics', 'books'];

    useEffect(() => {
        if (categ) {
            getdata();
        }
    }, [categ]);

    async function getdata() {
        const response = await fetch(`/api/getitems?categ=${categ}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            setItems(data.product);
        } else {
            console.log('Error fetching items:', response.statusText);
        }
    }

    return (
        <div>
            <h1>Browsing Items</h1>
            <div className="categories">
                {categories.map((category, index) => (
                    <button key={index} onClick={() => setCateg(category)}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <div className="items-container">
                {items.map((item, index) => (
                    <div key={index} className="item" onClick={() => onItemSelected(item)}>
                        <img src={item.image} alt="Product" />
                        <h3>{item.Description}</h3>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BrowsingItems;
