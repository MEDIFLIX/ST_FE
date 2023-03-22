import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { CenterContainer } from '../../styles/GlobalStyle';
import * as API from '../../api/API';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Login = () => {
  const [idValue, setIdValue] = useState<string>('');
  const [pwValue, setPwValue] = useState<string>('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginInfo = {
      id: idValue,
      pwd: pwValue,
    };
    const res = await API.post('/admin/login', loginInfo);

    console.log(res);
    if (res) {
      navigate(`/main`);
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIdValue(e.currentTarget.value);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPwValue(e.currentTarget.value);
  };
  return (
    <CenterContainer>
      <LoginContainer>
        <TextField
          id="standard-basic"
          label="ID"
          variant="standard"
          sx={{ marginBottom: '30px' }}
          value={idValue}
          onChange={handleIdChange}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          sx={{ marginBottom: '50px' }}
          value={pwValue}
          onChange={handlePwChange}
        />
        <Button variant="contained" sx={{ backgroundColor: 'black' }} onClick={handleLogin}>
          Login
        </Button>
      </LoginContainer>
    </CenterContainer>
  );
};

export default Login;
