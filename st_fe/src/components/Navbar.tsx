import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  width: 90vw;
  height: 70px;
  background-color: #ffffff;
  justify-content: space-between;
  border: 1px solid black;
  align-items: center;

  .contentContainer {
    display: flex;
    width: 20vw;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }
`;

const NavButton = styled.button`
  all: unset;
  border: 1px solid #d9d9d9;
  background-color: FFFFFF;
  padding: 10px;
`;

const Logo = styled.div`
  margin-left: 20px;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo>메디플릭스</Logo>
      <div className="contentContainer">
        <div>김땡땡</div>
        <NavButton>미리보기</NavButton>
        <div>exit</div>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
