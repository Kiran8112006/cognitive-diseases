import React, { useState, useEffect } from "react";
import "../../dyslexia/pages/dyslexia.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../LanguageContext";
import { 
    UserRoundPlus, 
    ScanFace, 
    ChevronLeft, 
    ChevronRight 
} from "lucide-react";

const Home = () => {
    const navigate = useNavigate();
    const { t, isDyslexicFont } = useLanguage();
    
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const carouselItems = [
        {
            id: 'enroll',
            title: "Enroll Face",
            icon: UserRoundPlus,
            path: "/enroll",
            description: "Register a new face to your personal database."
        },
        {
            id: 'identify',
            title: "Identify Faces",
            icon: ScanFace,
            path: "/identify",
            description: "Scan an image to recognize previously saved faces."
        }
    ];

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        });
        return () => unsubscribeAuth();
    }, []);

    const nextSlide = () => setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    const prevSlide = () => setCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

    return (
        <div className={`dyslexia-wrapper ${isDyslexicFont ? "opendyslexic-font" : ""}`}>
            <div className="snow-background"></div>

            <main className="dys-main">
                <header className="dys-header">
                    <h1 className="dys-title">Prosopagnosia Assistant</h1>
                </header>

                <div className="dys-carousel-container">
                    <button onClick={prevSlide} className="dys-arrow-btn">
                        <ChevronLeft size={32} />
                    </button>

                    <div className="dys-carousel-viewport">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={carouselIndex}
                                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="dys-carousel-frame"
                                onClick={() => navigate("/propognasia" + carouselItems[carouselIndex].path)}
                            >
                                {(() => {
                                    const IconComp = carouselItems[carouselIndex].icon;
                                    return <IconComp size={80} className="dys-icon-lucide" color="#3b82f6" strokeWidth={1.5} />;
                                })()}
                                <h2 className="dys-carousel-title">{carouselItems[carouselIndex].title}</h2>
                                <p className="dys-carousel-desc">{carouselItems[carouselIndex].description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button onClick={nextSlide} className="dys-arrow-btn">
                        <ChevronRight size={32} />
                    </button>
                </div>

                <div className="dys-indicators">
                    {carouselItems.map((_, i) => (
                        <div
                            key={i}
                            className={`dys-indicator ${i === carouselIndex ? "active" : ""}`}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};
export default Home;
