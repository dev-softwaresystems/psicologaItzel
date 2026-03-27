import React from 'react';
import './TopNavBar.css';

const TopNavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Brand Logo & Search */}
                <div className="nav-brand-group">
                    <span className="brand-text">MarketFlow</span>
                    
                    {/* Search Bar */}
                    <div className="search-bar">
                        <span className="material-symbols-outlined text-outline">search</span>
                        <input 
                            className="search-input" 
                            placeholder="Explore the collection..." 
                            type="text" 
                        />
                    </div>
                </div>

                {/* Trailing Icons Actions */}
                <div className="nav-actions">
                    <button className="nav-action-btn">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="nav-action-btn group">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        <span className="badge">3</span>
                    </button>
                    <button className="nav-action-btn">
                        <span className="material-symbols-outlined">account_circle</span>
                    </button>
                    <button className="nav-action-btn menu-btn">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default TopNavBar;
