import { Route, Routes, BrowserRouter } from "react-router-dom";
import DetalhesCandidato from "./Componentes/Telas/DetalhesCandidato";
import TelaPrincipal from "./Componentes/Telas/TelaPrincipal";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaPrincipal />} />
                <Route path="/candidato" element={<DetalhesCandidato />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
