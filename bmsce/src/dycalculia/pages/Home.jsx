import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dyscalculia.css";
import ARCountingGame from "../components/ARCountingGame";
import MusicMathGame from "../components/MusicMathGame";
import StoryMode from "../components/StoryMode";
import { useLanguage } from "@/LanguageContext";
import { 
    Hash, 
    Ruler, 
    Calculator, 
    Camera, 
    Music, 
    BookOpen, 
    ChevronLeft, 
    ChevronRight, 
    ArrowRight 
} from "lucide-react";

export default function Home() {
    const navigate = useNavigate();
    const { language, changeLanguage, t } = useLanguage();
    const [showARCounter, setShowARCounter] = useState(false);
    const [showMusicGame, setShowMusicGame] = useState(false);
    const [showStoryMode, setShowStoryMode] = useState(false);
    const [testsCarouselIndex, setTestsCarouselIndex] = useState(0);
    const [featuresCarouselIndex, setFeaturesCarouselIndex] = useState(0);

    if (showARCounter) return <ARCountingGame onBack={() => setShowARCounter(false)} />;
    if (showMusicGame) return <MusicMathGame onBack={() => setShowMusicGame(false)} />;
    if (showStoryMode) return <StoryMode onBack={() => setShowStoryMode(false)} />;

    const testsData = [
        { id: "dot", icon: Hash, title: t("dotsComparison"), description: t("dotsComparisonDesc") },
        { id: "numberline", icon: Ruler, title: t("numberLine"), description: t("numberLineDesc") },
        { id: "arithmetic", icon: Calculator, title: t("arithmeticTest"), description: t("arithmeticTestDesc") },
    ];

    const featuresData = [
        { icon: Camera, title: t("arCounter"), description: t("arCounterDesc"), action: () => setShowARCounter(true) },
        { icon: Music, title: t("musicMath"), description: t("musicMathDesc"), action: () => setShowMusicGame(true) },
        { icon: BookOpen, title: t("storyMode"), description: t("storyModeDesc"), action: () => setShowStoryMode(true) },
    ];

    return (
        <div className="dycalculia-wrapper">
            <div className="snow-background"></div>

            <main className="dy-container">
                <header className="dy-header">
                    <h1 className="dy-title">{t("dyscalculiaMode")}</h1>
                </header>

                {/* Tests Carousel */}
                <section className="dy-panel" style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '32px', textAlign: 'center' }}>
                        {t("assessmentTests")}
                    </h2>
                    <div className="dy-carousel-container">
                        <button
                            className="dy-nav-btn"
                            onClick={() => setTestsCarouselIndex((prev) => (prev - 1 + testsData.length) % testsData.length)}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="dy-carousel-viewport">
                            <div className="dy-carousel-track" style={{ transform: `translateX(-${testsCarouselIndex * 100}%)` }}>
                                {testsData.map((test) => (
                                    <Link key={test.id} to={`/dycalculia/test/${test.id}`} className="dy-card">
                                        <div className="dy-card-icon">
                                            <test.icon size={80} strokeWidth={1.5} />
                                        </div>
                                        <h3>{test.title}</h3>
                                        <p>{test.description}</p>
                                        <span className="start-link-text" style={{ color: '#3b82f6', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                            {t("startTest")} <ArrowRight size={20} />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <button
                            className="dy-nav-btn"
                            onClick={() => setTestsCarouselIndex((prev) => (prev + 1) % testsData.length)}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </section>

                {/* Features Carousel */}
                <section className="dy-panel">
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '32px', textAlign: 'center' }}>
                        {t("featuresSection")}
                    </h2>
                    <div className="dy-carousel-container">
                        <button
                            className="dy-nav-btn"
                            onClick={() => setFeaturesCarouselIndex((prev) => (prev - 1 + featuresData.length) % featuresData.length)}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="dy-carousel-viewport">
                            <div className="dy-carousel-track" style={{ transform: `translateX(-${featuresCarouselIndex * 100}%)` }}>
                                {featuresData.map((feature, idx) => (
                                    <div key={idx} className="dy-card" onClick={feature.action}>
                                        <div className="dy-card-icon">
                                            <feature.icon size={80} strokeWidth={1.5} />
                                        </div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                        <span className="start-link-text" style={{ color: '#3b82f6', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                            {t("start")} <ArrowRight size={20} />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="dy-nav-btn"
                            onClick={() => setFeaturesCarouselIndex((prev) => (prev + 1) % featuresData.length)}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
