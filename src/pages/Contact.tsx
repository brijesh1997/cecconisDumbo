import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock } from 'lucide-react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Contact & Location | Cecconi's DUMBO</title>
                <meta name="description" content="Visit Cecconi's DUMBO at 55 Water St, Brooklyn. Contact us for reservations and events." />
            </Helmet>

            <div className="contact-page">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="page-subtitle">Visit Us</span>
                        <h1 className="page-title">Contact</h1>
                        <p className="page-intro">We look forward to welcoming you.</p>
                    </div>

                    <div className="contact-content">
                        {/* Info */}
                        <div className="info-column">
                            <div className="info-group">
                                <h3><MapPin size={20} /> Location</h3>
                                <p className="info-text">
                                    55 Water St,<br />
                                    Brooklyn, NY 11201<br />
                                    (Located in Empire Stores)
                                </p>
                            </div>

                            <div className="info-group">
                                <h3><Phone size={20} /> Contact</h3>
                                <p className="info-text">
                                    Phone: (718) 650-3900<br />
                                    Email: info.dumbo@cecconis.com
                                </p>
                            </div>

                            <div className="info-group">
                                <h3><Clock size={20} /> Opening Hours</h3>
                                <ul className="hours-list">
                                    <li className="hours-item">
                                        <span>Mon - Thu</span>
                                        <span>11:30 AM - 10:00 PM</span>
                                    </li>
                                    <li className="hours-item">
                                        <span>Fri</span>
                                        <span>11:30 AM - 11:00 PM</span>
                                    </li>
                                    <li className="hours-item">
                                        <span>Sat</span>
                                        <span>11:00 AM - 11:00 PM</span>
                                    </li>
                                    <li className="hours-item">
                                        <span>Sun</span>
                                        <span>11:00 AM - 10:00 PM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.878330752178!2d-73.99368592397!3d40.7010260713958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31481b2bf3%3A0x670f567087754d9c!2sCecconi&#39;s%20Dumbo!5e0!3m2!1sen!2sus!4v1707500000000!5m2!1sen!2sus"
                                className="map-frame"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Cecconi's Dumbo Location"
                            ></iframe>
                        </div>
                    </div>

                    <div className="newsletter-section">
                        <div className="newsletter-label">Newsletter</div>
                        <p className="newsletter-intro">
                            Sign up for our newsletter to receive news, updates, and exclusive event invitations.
                        </p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="newsletter-input"
                            />
                            <button className="newsletter-btn">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
