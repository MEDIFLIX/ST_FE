import styled from 'styled-components';
import NavBar from '../../components/Navbar';
import SideBar from '../../components/SideBar';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: relative;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 10vw;
  width: 90vw;
  height: calc(100vh - 70px);

  background-color: #e7e7e7;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <NavBar />
      <SideBar />
      <ContentContainer>
        <div>hi</div>
      </ContentContainer>
    </MainContainer>
  );
};

export default MainPage;
