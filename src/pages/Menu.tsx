import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menuData'; // Ensure this data structure supports filtering
import '../styles/Menu.css';

// Grouping logic might be needed if menuItems is flat, 
// but assuming filteredItems returns the correct list.
const categories = ['Dinner', 'Lunch', 'Brunch', 'Drinks'];

const Menu: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Dinner');

    // Mock filtering - In real app, ensure data matches these categories
    // For now, mapping 'All Day' to 'Dinner'/'Lunch' concept or just fuzzy matching
    const filteredItems = menuItems.filter(item => {
        if (activeCategory === 'Dinner') return true; // Show all for demo
        if (activeCategory === 'Drinks') return item.category === 'Drinks';
        return item.category === activeCategory;
    });

    return (
        <>
            <Helmet>
                <title>Menus | Cecconi's DUMBO</title>
                <meta name="description" content="Handmade pasta, seafood, and cicchetti. View our Lunch, Dinner, and Brunch menus." />
            </Helmet>

            <div className="menu-page-container">
                <div className="container">

                    {/* Header */}
                    <header className="menu-page-header">
                        <span className="subtitle">Taste of Italy</span>
                        <h1 className="title">Our Menus</h1>
                    </header>

                    {/* Tabs */}
                    <nav className="menu-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </nav>

                    {/* Menu Grid */}
                    <motion.div
                        className="menu-grid-layout"
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                    >
                        {filteredItems.slice(0, 12).map((item, index) => (
                            <div className="menu-item-row" key={index}>
                                <div className="menu-item-info">
                                    <h3 className="menu-item-title">{item.name}</h3>
                                    <p className="menu-item-desc">{item.description}</p>
                                </div>
                                <div className="menu-item-price">
                                    {item.price}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* PDF Download / Footer */}
                    <div className="menu-footer-actions">
                        <p className="dietary-note">
                            * Please inform your server of any allergies or dietary requirements.
                        </p>
                        <button className="btn btn-outline">Download PDF Menu</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Menu;
