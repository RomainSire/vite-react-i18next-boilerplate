import { Route } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

export const useBaseRoutes = () => (
	<>
		<Route
			index
			element={<Home />}
		/>
		<Route
			path="about"
			element={<About />}
		/>
		<Route
			path="contact"
			element={<Contact />}
		/>
	</>
);
