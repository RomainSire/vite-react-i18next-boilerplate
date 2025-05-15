import { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";

export default function LanguageRedirecter() {
	const { lang } = useParams();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const allowedLangs = ["en", "fr"];
	const defaultLang = "fr";
	const isLangAllowed = allowedLangs.includes(lang ?? "");

	useEffect(() => {
		if (!isLangAllowed) {
			navigate(`/${defaultLang}${pathname}`, { replace: true });
		}
	}, [navigate, pathname, isLangAllowed, lang]);

	return <Outlet />;
}
