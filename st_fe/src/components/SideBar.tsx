import { Button } from '@mui/material';
import styled from 'styled-components';
import { FlexContainer } from '../styles/GlobalStyle';
import StarRateIcon from '@mui/icons-material/DeleteSweepTwoTone';

const SideBarContainer = styled(FlexContainer)`
  position: absolute;
  top: 0;
  width: 13vw;
  height: 100vh;
  background-color: #4a4a4a;
  display: flex;
  flex-direction: column;

  hr {
    position: absolute;
    width: 100%;
    top: 70px;
    margin: 0;
    bak: #f5f5f5;
  }
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      <hr />
      <Button
        variant="outlined"
        startIcon={<StarRateIcon />}
        sx={{ color: 'white', border: 'none' }}
      >
        대시보드
      </Button>
      <Button
        variant="outlined"
        startIcon={<StarRateIcon />}
        sx={{ color: 'white', border: 'none' }}
      >
        대시보드
      </Button>
      <Button
        variant="outlined"
        startIcon={<StarRateIcon />}
        sx={{ color: 'white', border: 'none' }}
      >
        대시보드
      </Button>
      <Button
        variant="outlined"
        startIcon={<StarRateIcon />}
        sx={{ color: 'white', border: 'none' }}
      >
        대시보드
      </Button>
      <Button
        variant="outlined"
        startIcon={<StarRateIcon />}
        sx={{ color: 'white', border: 'none' }}
      >
        대시보드
      </Button>
    </SideBarContainer>
  );
};

export default SideBar;
