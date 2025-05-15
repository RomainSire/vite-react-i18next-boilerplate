import { Button } from "@/components/ui/button";
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
				<Button
					key={lang}
					onClick={() => handleChangeLang(lang)}
					variant="outline"
					size="default"
				>
					{name}
				</Button>
			))}
		</div>
	);
}
