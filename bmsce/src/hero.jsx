import { useNavigate } from "react-router-dom";
import "./hero.css";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./translations";
import { LayoutGrid, BookOpen, ScanFace } from "lucide-react";

export default function Hero({ user }) {
    const navigate = useNavigate();
    const { language, changeLanguage } = useLanguage();
    const t = (key) => getTranslation(language, key);
    
    const userDisplayName = user?.displayName || user?.email?.split('@')[0] || "User";

    return (
        <div className="dashboard-wrapper">
            <div className="snow-background"></div>

            <div className="dashboard-main">
                <header className="dash-header">
                    <h1 className="dash-welcome-title">{t("welcomeBack")}</h1>
                    <p className="dash-welcome-subtitle">{t("whatToDo")}</p>
                </header>

                <div className="dash-grid">
                    {/* Dyscalculia Card */}
                    <div className="dash-mode-card">
                        <div className="mode-icon-container dyscalculia-glow">
                            <LayoutGrid className="mode-icon" size={80} strokeWidth={1.5} />
                        </div>
                        <h2 className="mode-name">{t("dyscalculia")}</h2>
                        <p className="mode-desc">{t("dyscalculiaDesc")}</p>
                        <button 
                            onClick={() => navigate("/dycalculia")} 
                            className="mode-btn btn-dyscalculia"
                        >
                            {t("startDyscalculia")}
                        </button>
                    </div>

                    {/* Dyslexia Card */}
                    <div className="dash-mode-card">
                        <div className="mode-icon-container dyslexia-glow">
                            <BookOpen className="mode-icon" size={80} strokeWidth={1.5} />
                        </div>
                        <h2 className="mode-name">{t("dyslexia")}</h2>
                        <p className="mode-desc">{t("dyslexiaDesc")}</p>
                        <button 
                            onClick={() => navigate("/dyslexia")} 
                            className="mode-btn btn-dyslexia"
                        >
                            {t("startDyslexia")}
                        </button>
                    </div>

                    {/* Prosopagnosia Card */}
                    <div className="dash-mode-card">
                        <div className="mode-icon-container dyslexia-glow">
                            <ScanFace className="mode-icon" size={80} strokeWidth={1.5} />
                        </div>
                        <h2 className="mode-name">Prosopagnosia</h2>
                        <p className="mode-desc">Face recognition and memory assistance tools to help identify individuals.</p>
                        <button 
                            onClick={() => navigate("/propognasia")} 
                            className="mode-btn btn-dyslexia"
                        >
                            Start Prosopagnosia
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
