import styled from 'styled-components';
import UserList from '../pages/MainPage/components/UserList';
import Memo from '../pages/MainPage/components/Memo';
import MessageList from '../pages/MainPage/components/MessageList';

const MemoContainer = styled.section`
  flex: 1;
  height: 100%;
  background-color: #fbfbfb;
`;

const StatusContainer = styled.div`
    display: absolute;
    flex-direction: column
    position: relative;
    margin: 10px;
    padding: 10px;
    background-color: #FFFFFF;
    height: auto
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
  min-height: 300px;   
  height: auto;
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
  height: auto;
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