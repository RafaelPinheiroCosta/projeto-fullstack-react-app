import "./estilo.css";
import login from "../../imagens/login.png";
import pesquisar from "../../imagens/pesquisar.png"

const listaIcone = [login,pesquisar]

function IconesCabecalho() {
  return (
    <div className="icones">
      {
        listaIcone.map((icone)=>(          
          <img src={icone} className="icone" alt="login" />
        ))
      }
    </div>
  );
}
export default IconesCabecalho;
