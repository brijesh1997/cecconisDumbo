import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer-soul">
            <div className="container">
                <div className="footer-grid">

                    {/* Col 1: Brand */}
                    <div className="footer-col brand-col">
                        <h2 className="footer-logo">CECCONI'S</h2>
                        <span className="footer-sub">DUMBO</span>
                        <div className="social-links">
                            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                    </div>

                    {/* Col 2: Navigation */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Explore</h4>
                        <ul className="footer-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menus">Menus</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/private-events">Private Events</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Contact */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Contact</h4>
                        <p>55 Water St<br />Brooklyn, NY 11201</p>
                        <p>+1 (718) 650-3900</p>
                        <p><a href="mailto:info@cecconisdumbo.com">info@cecconisdumbo.com</a></p>
                    </div>

                    {/* Col 4: Hours & CTA */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Hours</h4>
                        <p>Mon - Sun: 11:30am - 10pm</p>
                        <p>Happy Hour: 3pm - 6pm</p>

                        <div className="footer-cta">
                            <Link to="/reservations" className="btn btn-outline">
                                Book Your Table
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <div className="legal-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/accessibility">Accessibility</Link>
                    </div>
                    <p className="copyright">&copy; 2026 Cecconi's Dumbo. Website by 80 Days.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
