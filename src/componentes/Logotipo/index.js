import styled from 'styled-components';
import logo from "../../imagens/SENAI_São_Paulo_logo.png";

const AppLogotipo = styled.div`
display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  margin-left: 5%;
  font-weight: bold;

  .Logo-img{
    height: 8vh;
    pointer-events: none;
  }
  .Logo-p{
    margin: 0;
  }
`

function Logotipo() {
  return (
    <AppLogotipo>
      <img src={logo} className="Logo-img" alt="logo" />
      <p className='Logo-p'>"Anchieta"</p>
    </AppLogotipo>
  );
}
export default Logotipo