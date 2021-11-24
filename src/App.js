import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CanlıEkran from "./pages/CanlıEkran";
import Manifesto from "./pages/Manifesto";
import TimeZone from "./pages/TimeZone";
import ZonePlan from "./pages/ZonePlan";
import Operasyon from "./pages/Operasyon";
import { CargoProvider } from "./context/CargoContext";
import Buttons from "./components/Buttons";
// import PrivateRouter from "./router/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <CargoProvider>
        <Navbar />
        <Buttons />
        <Routes>
          {/* <PrivateRouter exact path='/operasyon' element={<Operasyon />}/> */}
          <Route path="/operasyon" element={<Operasyon />} />
          <Route path="/canli-ekran" element={<CanlıEkran />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/time-zone" element={<TimeZone />} />
          <Route path="/zone-plan" element={<ZonePlan />} />
        </Routes>
      </CargoProvider>
    </BrowserRouter>
  );
}

export default App;
