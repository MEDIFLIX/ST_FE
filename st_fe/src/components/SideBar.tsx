import { Button } from '@mui/material';
import styled from 'styled-components';
import { FlexContainer } from '../styles/GlobalStyle';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';

const SideBarContainer = styled(FlexContainer)`
  position: absolute;
  top: 0;
  width: 10vw;
  height: 100vh;
  background-color: #303030;
  display: flex;
  flex-direction: column;

  .SideContent {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 95px;
    height: 200px;
    justify-content: space-between;
    align-items: flex-start;
    width: 88%;
  }

  .SideOption {
    display: flex;
    top: 420px;
    flex-direction: column;
    position: absolute;
    justify-content: space-between;
    height: 100px;
    align-items: flex-start;
    width: 90%;
  }
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      <div className="SideContent">
        <Button variant="outlined" startIcon={<HomeIcon />} sx={{ color: 'white', border: 'none' }}>
          대시보드
        </Button>
        <Button
          variant="outlined"
          startIcon={<PermIdentityIcon />}
          sx={{ color: 'white', border: 'none' }}
        >
          사용자 관리
        </Button>
        <Button
          variant="outlined"
          startIcon={<MovieCreationOutlinedIcon />}
          sx={{ color: 'white', border: 'none' }}
        >
          콘텐츠 관리
        </Button>
      </div>
      <div className="SideOption">
        <Button
          variant="outlined"
          startIcon={<SettingsIcon />}
          sx={{ color: 'white', border: 'none' }}
        >
          환경설정
        </Button>
        <Button
          variant="outlined"
          startIcon={<SupportAgentIcon />}
          sx={{ color: 'white', border: 'none' }}
        >
          고객지원
        </Button>
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
