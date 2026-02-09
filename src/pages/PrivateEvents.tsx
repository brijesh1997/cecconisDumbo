import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/PrivateEvents.css';

const PrivateEvents: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        type: 'Dinner',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your inquiry. Our events team will contact you shortly.');
    };

    return (
        <>
            <Helmet>
                <title>Private Dining & Events | Cecconi's DUMBO</title>
                <meta name="description" content="Host your private event at Cecconi's DUMBO with exclusive dining areas and custom Italian menus." />
            </Helmet>

            <div className="events-page">
                <div className="container">
                    <div className="events-intro">
                        <span className="page-subtitle">Exclusive Gatherings</span>
                        <h1 className="page-title">Private Dining</h1>
                        <p className="page-intro">
                            From intimate dinners to full restaurant buyouts, Cecconi’s DUMBO offers a unique setting for your special event with panoramic views of the Brooklyn Bridge and Manhattan skyline.
                        </p>
                    </div>

                    <div className="events-grid">
                        {/* Info & Images */}
                        <div>
                            <div className="image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
                                    alt="Private Dining Room"
                                />
                                <div className="image-border"></div>
                            </div>

                            <h3 className="room-title">The Butterfly Room</h3>
                            <p className="room-desc">
                                Our private dining room, The Butterfly Room, can accommodate up to 40 guests for a seated dinner or 60 for a standing reception.
                                The space features floor-to-ceiling windows and a private bar.
                            </p>
                            <ul className="room-features">
                                <li><strong className="feature-label">Seated Capacity:</strong> 40 Guests</li>
                                <li><strong className="feature-label">Standing Capacity:</strong> 60 Guests</li>
                                <li><strong className="feature-label">Features:</strong> Private Bar, AV Capabilities, Skyline Views</li>
                            </ul>
                        </div>

                        {/* Inquiry Form */}
                        <div className="form-container">
                            <div className="form-accent"></div>
                            <h3 className="form-title">Inquire Now</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="form-input"
                                            style={{ colorScheme: 'dark' }}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Guests</label>
                                        <input
                                            type="number"
                                            name="guests"
                                            min="1"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Event Type</label>
                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="form-select"
                                        >
                                            <option>Dinner</option>
                                            <option>Lunch</option>
                                            <option>Cocktail Reception</option>
                                            <option>Meeting</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-textarea"
                                    ></textarea>
                                </div>

                                <div className="form-submit-wrapper">
                                    <button type="submit" className="btn btn-primary btn-full">Send Inquiry</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivateEvents;
