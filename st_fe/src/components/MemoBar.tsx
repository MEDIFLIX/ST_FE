import styled from 'styled-components';
import UserList from '../pages/MainPage/components/UserList';
import Memo from '../pages/MainPage/components/Memo';
import MessageList from '../pages/MainPage/components/MessageList';

const MemoContainer = styled.section`
  flex: 1;
  width: 300px;
  height: 100%;
  background-color: #fbfbfb;
`;

const StatusContainer = styled.div`
    display: relative;
    flex-direction: column
    position: relative;
    margin: 10px;
    padding: 10px;
    background-color: #FBFBFB;
    height: 390px;
    border-radius: 5%;
`;

const MessageContainer = styled.div`
  display: absolute;
  background-color: #FFFFFF;
  border-color: #E31E26;
  border-style:solid;
  border-width: 0px 0px 10px 0px;
  border-radius: 5%;    
  margin: 10px;
  padding: 10px; 
  height: 250px;
`;

const MemoBox = styled.div`
  display: absolute;
  background-color: #FFFFFF;
  border-color: #E31E26;
  border-style:solid;
  border-width: 0px 0px 10px 0px;
  border-radius: 5%;
  margin: 10px;
  padding: 10px;
  height: 200px;
`;


const MemoBar = () => {
  return (
    <MemoContainer>
      <StatusContainer>
        <UserList />
      </StatusContainer>
      <MessageContainer>
        <MessageList></MessageList>
      </MessageContainer>
      <MemoBox>
        <Memo></Memo>
      </MemoBox>
    </MemoContainer>

  );
}


export default MemoBar;