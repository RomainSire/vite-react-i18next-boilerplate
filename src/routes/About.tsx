import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="text-2xl font-bold">{t("about.title")}</h1>
            <p>{t("about.description")}</p>
        </div>
    );
}