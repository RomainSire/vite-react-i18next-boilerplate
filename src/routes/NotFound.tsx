import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function NotFound() {
    const { t, i18n } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center pt-48 bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600">{t("not_found.title")}</h1>
            <p className="mt-4 text-lg">{t("not_found.description")}</p>
            <Link to={`/${i18n.resolvedLanguage}`} className="mt-6 text-blue-500 hover:underline">
                {t("not_found.action")}
            </Link>
        </div>
    );
}