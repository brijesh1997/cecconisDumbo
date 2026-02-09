import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Cecconi's DUMBO | Modern Italian Dining</title>
                <meta name="description" content="Experience modern Italian dining with breathtaking Manhattan skyline views at Cecconi's DUMBO." />
            </Helmet>

            <main>
                {/* Hero Section: Split Screen */}
                <section className="hero-split">
                    {/* Left: Content */}
                    <div className="hero-text-side">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hero-content-wrapper"
                        >
                            <span className="hero-label">EST. 1978</span>
                            <h1 className="hero-title">
                                MODERN<br />ITALIAN<br />DINING
                            </h1>
                            <p className="hero-description">
                                Handmade pasta, seafood, and dishes from Italy using the finest ingredients.
                            </p>
                            <div className="hero-actions">
                                <Link to="/reservations" className="btn btn-primary">
                                    Book Table
                                </Link>
                                <Link to="/menus" className="btn btn-outline">
                                    View Menu
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Image */}
                    <div className="hero-image-side">
                        <iframe
                            src="https://player.vimeo.com/video/1038585174?h=32aa5c0f36&muted=1&loop=1&background=1&app_id=122963"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            className="hero-video-iframe"
                            title="Cecconi's Atmosphere"
                        ></iframe>
                    </div>
                </section>

                {/* Section: Minimalist About */}
                <section className="section-minimal">
                    <div className="container">
                        <div className="minimal-grid">
                            <div className="minimal-text">
                                <span className="section-label">THE STORY</span>
                                <h2 className="section-heading">VENETIAN ROOTS <br /> BROOKLYN SOUL</h2>
                                <p>
                                    Located in Brooklyn Bridge Park, Cecconi’s Dumbo is a modern day classic Italian restaurant open for lunch, cicchetti, and dinner. With waterfront views of the Manhattan skyline, Cecconi’s Dumbo is the perfect place to enjoy the finest handmade pasta, seafood, and dishes from Italy.
                                </p>
                                <Link to="/about" className="btn btn-outline">Read More</Link>
                            </div>
                            <div className="minimal-image">
                                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" alt="Plating Detail" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Signature Menu Preview */}
                <section className="section-menu-preview">
                    <div className="container">
                        <div className="menu-header">
                            <span className="section-label">CULINARY</span>
                            <h2 className="section-heading">SIGNATURE DISHES</h2>
                        </div>

                        <div className="menu-grid">
                            {/* Item 1 */}
                            <div className="menu-item-card">
                                <div className="menu-card-image">
                                    <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop" alt="Pasta" />
                                </div>
                                <div className="menu-card-content">
                                    <h3>Lobster Spaghetti</h3>
                                    <span className="price">$48</span>
                                    <p>Maine lobster, chili, saffron, basil</p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="menu-item-card">
                                <div className="menu-card-image">
                                    <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" alt="Pizza" />
                                </div>
                                <div className="menu-card-content">
                                    <h3>Black Truffle Pizza</h3>
                                    <span className="price">$38</span>
                                    <p>Zucchini blossom, goat cheese, truffle oil</p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="menu-item-card">
                                <div className="menu-card-image">
                                    <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" alt="Seafood" />
                                </div>
                                <div className="menu-card-content">
                                    <h3>Branzino</h3>
                                    <span className="price">$42</span>
                                    <p>Lemon, capers, olives, spinach</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                            <Link to="/menus" className="btn btn-outline">View All Menus</Link>
                        </div>
                    </div>
                </section>

                {/* Section: Selection/Booking CTA */}
                <section className="cta-split">
                    <div className="cta-left">
                        <span className="section-label">LOCATIONS</span>
                        <h2>VISIT US</h2>
                        <p>55 Water St, Brooklyn, NY 11201</p>
                        <Link to="/contact" className="link-arrow">Get Directions</Link>
                    </div>
                    <div className="cta-right">
                        <span className="section-label">RESERVATIONS</span>
                        <h2>BOOK A TABLE</h2>
                        <p>Experience the view.</p>
                        <Link to="/reservations" className="link-arrow">Reserve Now</Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
