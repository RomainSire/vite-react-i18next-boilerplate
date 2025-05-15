import { changeLanguage } from "i18next";
import { useLocation, useNavigate } from "react-router";
import { supportedLangages } from "./config";

export default function LanguageSwitcher() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleChangeLang = (lang: string) => {
        changeLanguage(lang);
        const langRegex = new RegExp(`^\\/(${Object.keys(supportedLangages).join("|")})`);
        const cleanPathname = pathname.replace(langRegex, "");
        navigate(`/${lang}${cleanPathname}`, { replace: true });
    };
    return (
        <div className="flex gap-2">
            {Object.entries(supportedLangages).map(([lang, name]) => (
                <button
                    key={lang}
                    onClick={() => handleChangeLang(lang)}
                    className="bg-teal-600 hover:bg-teal-500 transition-all cursor-pointer text-white px-4 py-2 rounded"
                >
                    {name}
                </button>
            ))}
        </div>
    );
}