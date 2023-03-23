import React, { useState, useEffect } from 'react';
import Message from './Message';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';
import * as API from '../../../api/API';

// 자식컴포넌트로 넘겨주기위해 export해 줍시다.
export type MessageType = {
  id: number;
  name: string;
  content: string;
  createDate: string;
  isCheck: boolean;
};

export default function MessageList(): React.ReactElement {
  const [text, setText] = useState<string>('');

  const fetchBoardList = async () => {
    const data = await API.get('/board/list');
    const list = data.result;
    setMessageList(list);
    console.log(list);
    return data;
  };

  useEffect(() => {
    fetchBoardList();
  },[]);

  const handleChangeText = (event: any) => {
    setText(event.target.value);
  };

  const newElement = {
    id: 0,
    name: '김땡땡',
    content: text,
    createDate: '2023.02.10.',
    isCheck: false,
  };

  const [messageList, setMessageList] = useState<MessageType[]>([
    {
      id: 0,
      name: '이름 - 1',
      content: '혹시 콘텐츠 분석 완료했나요?',
      createDate: '2023.02.10.',
      isCheck: false,
    },
    {
      id: 1,
      name: '이름 - 2',
      content: '혹시 콘텐츠 분석 완료했나요?',
      createDate: '2023.02.10.',
      isCheck: true,
    },
  ]);

  const handleChangeMessageList = () => {
    setMessageList([...messageList, newElement]);
    setText('');
  };

  return (
    <div>
      <Box
        sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: '100%', flex: 1, margin: '10px' }}
      >
        <TextField
          fullWidth
          id="standard-textarea"
          multiline
          variant="standard"
          onChange={handleChangeText}
          value={text}
        />

        <IconButton color="primary" onClick={handleChangeMessageList}>
          <TelegramIcon sx={{ color: '#E31E26' }} />
        </IconButton>
      </Box>
      {messageList.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
