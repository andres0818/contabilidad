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
        <Route path="/" element={<Home />} >
          <Route path="/quienes-somos" element={<QuienesSomos/>} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path="/contactenos" element={<Contactenos/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
