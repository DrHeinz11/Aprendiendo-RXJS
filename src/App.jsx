import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  Home,
  InfoVisaSection,
  ComienzaAqui,
  Servicio,
  WorkingHoliday,
  Comunidad,
  Articulos,
} from "./Pages/index";
import DestinoSection from "./pages/Destino/DestinoSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterCopyright from "./components/FooterComponent/FooterCopyright";
import { dataHeader } from "./constants/dataHeader";
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar data={dataHeader} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/country/:id" element={<InfoVisaSection />} />
          <Route path="/comienza-aqui/" element={<ComienzaAqui />} />
          <Route path="/services/" element={<Servicio />} />
          <Route path="/working-holiday/:id" element={<WorkingHoliday />} />
          <Route path="/comunidad/" element={<Comunidad />} />
          <Route path="/blog/:id" element={<Articulos />} />
          <Route path="/working-holiday/visa" element={<InfoVisaSection />} />
          <Route path="/destinos/" element={<DestinoSection />} />
        </Routes>
        <FooterCopyright />
      </>
    </BrowserRouter>
  );
}

export default App;
