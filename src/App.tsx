import { BrowserRouter } from "react-router";
import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import AllRoutes from "./routes";

export default function App() {
    useLocalizeDocumentAttributes();
    return (
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    )
}