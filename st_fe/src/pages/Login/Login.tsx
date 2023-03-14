import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { CenterContainer } from '../../styles/GlobalStyle';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/main`);
  };

  return (
    <CenterContainer>
      <LoginContainer>
        <TextField
          id="standard-basic"
          label="ID"
          variant="standard"
          sx={{ marginBottom: '30px' }}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          sx={{ marginBottom: '50px' }}
        />
        <Button variant="contained" sx={{ backgroundColor: 'black' }} onClick={handleLogin}>
          Login
        </Button>
      </LoginContainer>
    </CenterContainer>
  );
};

export default Login;
