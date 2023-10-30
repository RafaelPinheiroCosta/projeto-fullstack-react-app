import './estilo.css'
import Logotipo from "../Logotipo";
import Menu from "../Menu";
import IconesCabecalho from "../Login";

function Cabecalho() {
  return (
    <header className="App-header">
      <Logotipo />
      <Menu />
      <IconesCabecalho />
    </header>
  );
}
export default Cabecalho
