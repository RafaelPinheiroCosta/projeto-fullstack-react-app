import "./estilo.css";
import login from "../../imagens/login.png";
import pesquisar from "../../imagens/pesquisar.png"

function IconesCabecalho() {
  return (
    <div className="icones">
      <img src={pesquisar} className="icone" alt="login" />
      <img src={login} className="icone" alt="login" />
    </div>
  );
}
export default IconesCabecalho;
