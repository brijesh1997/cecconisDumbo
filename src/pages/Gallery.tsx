import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Gallery.css';

const galleryImages = [
    // Row 1 & 2
    { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", span: "col-span-2 row-span-2" }, // Verified Restaurant Interior (Large)
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", span: "" }, // Verified Outdoor/Canopy
    { src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop", span: "" }, // Verified Dark Interior
    { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop", span: "" }, // Verified Cocktail
    { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop", span: "" }, // Verified Bar

    // Row 3 (Middle Wide)
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", span: "col-span-2" }, // Verified Plating
    { src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop", span: "col-span-2" }, // Verified Pasta

    // Row 4 & 5
    { src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1974&auto=format&fit=crop", span: "" }, // Verified Restaurant Wide
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop", span: "" }, // Verified Dark Food
    // Vertical at end
    { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop", span: "row-span-2" }, // Verified Coffee/Interior
    { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2070&auto=format&fit=crop", span: "row-span-2" }, // Verified Pizza/Food
    // Bottom fillers to complete grid
    { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop", span: "" }, // Verified Pasta 2
    { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2157&auto=format&fit=crop", span: "" }, // Verified Drinks (New Replacement)
];

const Gallery: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') setSelectedIndex(null);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <>
            <Helmet>
                <title>Gallery | Cecconi's DUMBO</title>
                <meta name="description" content="View photos of our food, drinks, and stunning waterfront location at Cecconi's DUMBO." />
            </Helmet>

            <div className="gallery-page">
                <div className="container" style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span className="page-subtitle">Visuals</span>
                    <h1 className="page-title">The Experience</h1>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`gallery-item ${img.span}`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img
                                src={img.src}
                                alt="Gallery Item"
                                className="gallery-img"
                            />
                            <div className="gallery-overlay">
                                <span className="view-text">View Larger</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lightbox-overlay"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                                <button className="lightbox-close" onClick={() => setSelectedIndex(null)}>
                                    <X size={32} />
                                </button>

                                <button className="lightbox-nav-btn prev-btn" onClick={handlePrev}>
                                    <ChevronLeft size={24} />
                                </button>

                                <motion.img
                                    key={selectedIndex} // Key change triggers animation
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    src={galleryImages[selectedIndex].src}
                                    alt="Full Size"
                                    className="lightbox-img"
                                />

                                <button className="lightbox-nav-btn next-btn" onClick={handleNext}>
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Gallery;
