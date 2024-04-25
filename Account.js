// Account.js
import React, { useState } from 'react';
import "./Account.css";
import "./Home.css";

const Account = () => {
    return (
        <div className="account-section">
            {/* Content for My Account */}
            <h2>My Account</h2>
            <div className="account-details">
                <div className="profile-info">
                    <img src={sessionStorage.getItem("pfp")} alt="Profile" className="account-profile-pic" />
                    <h3>{sessionStorage.getItem("username")}</h3>
                    <p>{sessionStorage.getItem("em")}</p>
                    <p>{sessionStorage.getItem("phonenb:")}</p>
                    {/* Other personal details */}
                </div>
            </div>
        </div>
    );
};

export default Account;
