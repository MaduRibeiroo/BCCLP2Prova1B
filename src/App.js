import { Route, Routes, BrowserRouter } from "react-router-dom";
import Tabela from "./Componentes/Telas/tabela/tabelaCandidato";
import TelaPrincipal from "./Componentes/Telas/TelaPrincipal";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaPrincipal />} />
                <Route path="/candidato" element={<Tabela />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
