import './estilo.css'
import logo from "../../imagens/SENAI_São_Paulo_logo.png";

function Logotipo() {
  return (
    <div className='App-Logotipo'>
      <img src={logo} className="Logo-img" alt="logo" />
      <p className='Logo-p'>"Anchieta"</p>
    </div>
  );
}
export default Logotipo