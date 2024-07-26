import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cardapio from "./pages/Cardapio";
import Faq from "./pages/Faq";
import Oespaco from "./pages/Oespaco";
import Pratodaestacao from "./pages/Pratodaestacao";
import Sobrenos from "./pages/Sobrenos";
import Home from "./pages/Home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/Cardapio" element={<Cardapio />}> </Route>
                <Route path="/Faq" element={<Faq />}> </Route>
                <Route path="/Oespaco" element={<Oespaco />}> </Route>
                <Route path="/Pratodaestacao" element={<Pratodaestacao />}> </Route>
                <Route path="/Sobrenos" element={<Sobrenos />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;