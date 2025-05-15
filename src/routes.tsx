import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import LanguageRedirecter from "./i18n/LanguageRedirecter";
import { useBaseRoutes } from "./routes/base.routes";
import NotFound from "./routes/NotFound";

export default function AllRoutes() {
    const BaseRoutes = useBaseRoutes();
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path=":lang?" element={<LanguageRedirecter />} >
                    {BaseRoutes}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}