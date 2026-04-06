import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../auth";
import { useLanguage } from "../LanguageContext";
import { languages } from "../translations";
import { 
    ChevronLeft, 
    Brain, 
    Globe, 
    ChevronDown, 
    Check, 
    LogOut 
} from "lucide-react";
import "./Header.css";

export default function Header({ user }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { language, changeLanguage, t } = useLanguage();

    const [isLangOpen, setIsLangOpen] = React.useState(false);
    const langRef = React.useRef(null);

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLangChange = (code) => {
        changeLanguage(code);
        setIsLangOpen(false);
    };

    const isMainDashboard = location.pathname === "/dashboard";
    const isAuthPage = location.pathname === "/auth";
    const isLandingPage = location.pathname === "/";

    if (isLandingPage || isAuthPage) return null;

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <nav className="dash-nav">
            <div className="dash-nav-left" onClick={() => navigate("/dashboard")} style={{ cursor: 'pointer' }}>
                {!isMainDashboard ? (
                    <div className="dash-back-btn">
                        <ChevronLeft className="dash-logo" strokeWidth={3} />
                        <span className="dash-brand-name">{t("back") || "Back"}</span>
                    </div>
                ) : (
                    <div className="dash-brand">
                        <Brain className="dash-logo" strokeWidth={2.5} />
                        <span className="dash-brand-name">DDAP</span>
                    </div>
                )}
            </div>

            <div className="dash-nav-right">
                <div className="dash-lang-dropdown-container" ref={langRef}>
                    <button 
                        className={`dash-lang-toggle ${isLangOpen ? 'active' : ''}`}
                        onClick={() => setIsLangOpen(!isLangOpen)}
                    >
                        <Globe className="lang-globe-icon" size={18} strokeWidth={2.5} />
                        <span className="current-lang-code">{currentLang.nativeName.split(' ')[0]}</span>
                        <ChevronDown className={`lang-chevron ${isLangOpen ? 'up' : ''}`} size={14} strokeWidth={3} />
                    </button>

                    {isLangOpen && (
                        <div className="dash-lang-menu">
                            {languages.map(lang => (
                                <button
                                    key={lang.code}
                                    className={`dash-lang-option ${language === lang.code ? 'selected' : ''}`}
                                    onClick={() => handleLangChange(lang.code)}
                                >
                                    <span className="lang-native">{lang.nativeName}</span>
                                    {language === lang.code && (
                                        <Check className="lang-check" size={14} strokeWidth={4} color="#3b82f6" />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="dash-user-actions">
                    <button onClick={logout} className="dash-logout-btn" title={t("logout")}>
                        <LogOut size={18} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </nav>
    );
}

