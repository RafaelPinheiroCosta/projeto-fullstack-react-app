import "./App.css";
import Cabecalho from "./componentes/Cabeçalho";

function App() {
  return (
    <div className="App">
      
      <Cabecalho/>
      
      <div className="Corpo">

        <nav className="Barra-Nav">Nav</nav>

        <main className="Main">Main</main>
      </div>
    </div>
  );
}

export default App;
