import {UserType} from './UserList'
import styled from 'styled-components';

type UserProps = {
  user: UserType // 부모컴포넌트에서 import 해온 타입을 재사용 해 줍시다.
}

const CardContainer = styled.div`
  position: "grid";
  margin: "10px";
`;

const CardList = styled.ul`

`;

const Card = styled.li`
  display: grid;
  position: relative;
  height: calc(100% - 96px);
  margin: "10px";
  grid-gap: 16px;
  
  grid-template-areas:
    'icon name name name'
    'icon role role role';

  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  .card_icon {
    grid-area: icon;
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .card_name {
    grid-area: name;
    font-size: 12px;
    margin-bottom: 10px;
  }

  .card_role {
    grid-area: role;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    padding: 10px;
  }
  

`;


function User ({ user }: UserProps){
  const { icon, name, role} = user
  
  return (
    <CardContainer>
      <CardList>
        <Card>
          {icon}  {name} {role}
        </Card>
      </CardList>
    </CardContainer>
  );
}

export default User;