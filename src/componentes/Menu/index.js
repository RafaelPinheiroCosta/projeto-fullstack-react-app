import styled from "styled-components";
const listaMenu = [ "Home", "Cursos", "Turmas"];

const MenuCabecalho = styled.ul`
    display: flex;
`
const ItemMenu = styled.li`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0 10px;
cursor: pointer;
min-width: 100px;
`
function Menu(){
    return(
        <MenuCabecalho>
          { listaMenu.map((item) => (
              <ItemMenu>{item}</ItemMenu>
          ))}
        </MenuCabecalho>
    );
}
export default Menu