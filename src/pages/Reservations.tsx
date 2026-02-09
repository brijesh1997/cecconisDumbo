import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Reservations.css';

const Reservations: React.FC = () => {
    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <Helmet>
                <title>Reservations | Cecconi's DUMBO</title>
                <meta name="description" content="Book your table at Cecconi's DUMBO for an unforgettable dining experience overlooking the Manhattan skyline." />
            </Helmet>

            <div className="reservations-page">
                <div className="reservations-container">
                    <span className="page-subtitle">Join Us</span>
                    <h1 className="page-title">Reservations</h1>
                    <p className="page-intro">
                        We accept reservations throughout the day for lunch, dinner, and weekend brunch.
                        For parties of 8 or more, please contact our events team.
                    </p>

                    <div className="reservation-widget-area">
                        {/* Custom Styled Form instead of Loading Placeholder */}
                        <form onSubmit={(e) => { e.preventDefault(); alert('Redirecting to reservation system...'); }}>
                            <div className="res-form-grid">
                                <div className="res-form-group">
                                    <label className="res-label">Date</label>
                                    <input type="date" className="res-input" min={today} defaultValue={today} style={{ colorScheme: 'dark' }} />
                                </div>
                                <div className="res-form-group">
                                    <label className="res-label">Time</label>
                                    <select className="res-select">
                                        <option>5:00 PM</option>
                                        <option>5:30 PM</option>
                                        <option>6:00 PM</option>
                                        <option>6:30 PM</option>
                                        <option>7:00 PM</option>
                                        <option>7:30 PM</option>
                                        <option>8:00 PM</option>
                                        <option>8:30 PM</option>
                                        <option>9:00 PM</option>
                                    </select>
                                </div>
                                <div className="res-form-group" style={{ gridColumn: 'span 1' }}>
                                    <label className="res-label">Guests</label>
                                    <select className="res-select">
                                        <option>2 Guests</option>
                                        <option>3 Guests</option>
                                        <option>4 Guests</option>
                                        <option>5 Guests</option>
                                        <option>6 Guests</option>
                                        <option>7 Guests</option>
                                        <option>8+ Guests</option>
                                    </select>
                                </div>
                                {/* Empty div for grid balance on desktop if needed, or span 1 */}
                            </div>

                            <button type="submit" className="btn btn-primary btn-full">Find a Table</button>
                        </form>
                    </div>

                    <div className="policies-section">
                        <h3 className="policies-title">Dining Policies</h3>
                        <ul className="policies-list">
                            <li className="policy-item">
                                <span className="policy-dot"></span>
                                Reservations are available 30 days in advance.
                            </li>
                            <li className="policy-item">
                                <span className="policy-dot"></span>
                                We hold tables for 15 minutes past the reservation time.
                            </li>
                            <li className="policy-item">
                                <span className="policy-dot"></span>
                                Patio seating is first-come, first-served dependent on weather.
                            </li>
                            <li className="policy-item">
                                <span className="policy-dot"></span>
                                Smart casual attire is recommended.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reservations;
