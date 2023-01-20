import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.scss'
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import Servicios from "./pages/Servicios/Servicios";
import Contactenos from "./pages/Contactenos/Contactenos";


function App() {







  return (
    <>
      <Routes >
        <Route path="/contabilidad" element={<Home />} >
          <Route path="/contabilidad/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contabilidad/servicios" element={<Servicios />} />
          <Route path="/contabilidad/contactenos" element={<Contactenos />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
