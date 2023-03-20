import {UserType} from './UserList'
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type UserProps = {
  user: UserType // 부모컴포넌트에서 import 해온 타입을 재사용 해 줍시다.
}

const CardContainer = styled.div`
  position: "grid";
  margin: "10px";
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-color: #E7E7E7;
  border-style:solid;
  border-width: 0px 0px 1px 0px;
`;

const CardNameContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  maxWidth: "100%";
  flex-basis: 100%;

  .name{
    font-size: "15px";
    margin-bottem: "5px";
  }
  
  .role{
    font-size: "11px";
    color: "#B7B7B7";
  }

`;
 
function User ({ user }: UserProps){
  const {name, role} = user
  
  return (
    <CardContainer>
        <Card>
          <AccountCircleIcon  sx={{ color: "#B7B7B7", fontSize: "45px"}}/>
            <CardNameContainer>
              <p style={{marginBottom:"5px", fontSize:"15px"}} >{name}</p>
              <p style={{color: "#B7B7B7", fontSize:"11px"}}>{role}</p>
            </CardNameContainer>
          <InfoOutlinedIcon sx={{ color: "#E99185", fontSize:"20px" }} />
        </Card>
      
    </CardContainer>
  );
}

export default User;