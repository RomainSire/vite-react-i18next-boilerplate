import { useTranslation } from "react-i18next";
import { NavLink, Outlet, useParams } from "react-router";
import LanguageSwitcher from "../i18n/LanguageSwitcher";

const handleActiveClasses = ({ isActive }: { isActive: boolean }) => {
	return isActive ? "text-teal-600" : "transition-all hover:text-teal-600";
};

export default function Layout() {
	const { lang } = useParams();
	const { t } = useTranslation();
	return (
		<div className="flex flex-col min-h-screen bg-gray-100 gap-10 p-8">
			<header>
				<nav>
					<ul>
						<li>
							<NavLink
								className={handleActiveClasses}
								to={`/${lang}`}
								end
							>
								{t("home.short_title")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={handleActiveClasses}
								to={`/${lang}/about`}
							>
								{t("about.short_title")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={handleActiveClasses}
								to={`/${lang}/contact`}
							>
								{t("contact.short_title")}
							</NavLink>
						</li>
					</ul>
				</nav>
				<LanguageSwitcher />
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
