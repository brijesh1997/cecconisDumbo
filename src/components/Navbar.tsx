import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const menuLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menus', path: '/menus' },
        { name: 'Reservations', path: '/reservations' },
        { name: 'Private Events', path: '/private-events' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="navbar-grid">

                        {/* Left: Menu Toggle + Menus Link */}
                        <div className="nav-left">
                            <button
                                className="menu-toggle"
                                onClick={() => setIsOpen(true)}
                                aria-label="Open Menu"
                            >
                                <MenuIcon size={28} strokeWidth={1.5} />
                            </button>
                            <Link to="/menus" className="nav-link-left">MENUS</Link>
                        </div>

                        {/* Center: Logo */}
                        <div className="nav-center">
                            <Link to="/" className="logo-link">
                                <h1 className="logo-text">CECCONI'S</h1>
                                <span className="logo-sub">DUMBO</span>
                            </Link>
                        </div>

                        {/* Right: Private Events / Contact (No Book Button) */}
                        <div className="nav-right">
                            <Link to="/contact" className="nav-link-right">CONTACT</Link>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overlay-menu"
                    >
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            <X size={32} strokeWidth={1.5} />
                        </button>

                        <div className="overlay-content">
                            <span className="overlay-label">Navigation</span>

                            {menuLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: (index + 1) * 0.1 }}
                                >
                                    <Link to={link.path} className="overlay-link">
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="overlay-info">
                                <p>55 Water St, Brooklyn, NY</p>
                                <p>+1 (718) 650-3900</p>
                                <div className="overlay-socials">
                                    <span>IG</span>
                                    <span>FB</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
