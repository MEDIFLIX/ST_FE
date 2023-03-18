import { Button } from '@mui/material';
import styled from 'styled-components';
import { FlexContainer } from '../styles/GlobalStyle';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { useNavigate } from 'react-router';

const SideBarContainer = styled(FlexContainer)`
  position: absolute;
  top: 0;
  width: 10vw;
  height: 1024px;
  min-height: 100vh;
  background-color: #303030;
  display: flex;
  flex-direction: column;

  .SideContent {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 90px;
    height: 170px;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
  }

  .SideOption {
    display: flex;
    top: 419px;
    flex-direction: column;
    position: absolute;
    justify-content: space-between;
    height: 100px;
    align-items: flex-start;
    width: 90%;
  }
`;

interface SideBarProps {
  isDash: boolean;
}

const SideBar = ({ isDash }: SideBarProps) => {
  const navigate = useNavigate();

  const handleDashBtn = () => {
    navigate(`/main`);
  };

  const handleContentBtn = () => {
    navigate(`/original`);
  };

  return (
    <SideBarContainer>
      <div className="SideContent">
        {isDash ? (
          <Button
            variant="outlined"
            startIcon={<HomeIcon />}
            sx={{ color: 'red', border: 'none', fontSize: '13px' }}
            onClick={handleDashBtn}
          >
            대시보드
          </Button>
        ) : (
          <Button
            variant="outlined"
            startIcon={<HomeIcon />}
            sx={{ color: 'white', border: 'none', fontSize: '13px' }}
            onClick={handleDashBtn}
          >
            대시보드
          </Button>
        )}
        <Button
          variant="outlined"
          startIcon={<PermIdentityIcon />}
          sx={{ color: 'white', border: 'none', fontSize: '13px' }}
        >
          사용자 관리
        </Button>
        {isDash ? (
          <Button
            variant="outlined"
            startIcon={<MovieCreationOutlinedIcon />}
            sx={{ color: 'white', border: 'none', fontSize: '13px' }}
            onClick={handleContentBtn}
          >
            콘텐츠 관리
          </Button>
        ) : (
          <Button
            variant="outlined"
            startIcon={<MovieCreationOutlinedIcon />}
            sx={{ color: 'red', border: 'none', fontSize: '13px' }}
            onClick={handleContentBtn}
          >
            콘텐츠 관리
          </Button>
        )}
      </div>
      <div className="SideOption">
        <Button
          variant="outlined"
          startIcon={<SettingsIcon />}
          sx={{ color: 'white', border: 'none', fontSize: '13px' }}
        >
          환경설정
        </Button>
        <Button
          variant="outlined"
          startIcon={<SupportAgentIcon />}
          sx={{ color: 'white', border: 'none', fontSize: '13px' }}
        >
          고객지원
        </Button>
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
