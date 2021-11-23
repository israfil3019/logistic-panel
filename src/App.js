import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CanlıEkran from "./components/main/CanlıEkran";
import Manifesto from "./components/main/Manifesto";
import TimeZone from "./components/main/TimeZone";
import ZonePlan from "./components/main/ZonePlan";
import Operasyon from "./components/main/operasyon/Operasyon";
import { CargoProvider } from "./context/CargoContext";
import Buttons from "./components/Buttons";

function App() {
  return (
    <CargoProvider>
      <BrowserRouter>
        <Navbar />
        <Buttons/>
        <Routes>
          <Route path="/operasyon" element={<Operasyon />} />
          <Route path="/canli-ekran" element={<CanlıEkran />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/time-zone" element={<TimeZone />} />
          <Route path="/zone-plan" element={<ZonePlan />} />
        </Routes>
      </BrowserRouter>
    </CargoProvider>
  );
}

export default App;
