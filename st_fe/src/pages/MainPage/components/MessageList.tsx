import React, { useState } from 'react'
import Message from './Message'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';

// 자식컴포넌트로 넘겨주기위해 export해 줍시다.
export type MessageType = {
  id: number
  name: string
  detail: string
  date: string
  isCheck: boolean
}

export default function MessageList (): React.ReactElement {
  
  const [messageList, setMessageList] = useState<MessageType[]>([
    {
        id: 0,
        name: "이름 - 1",
        detail: "혹시 콘텐츠 분석 완료했나요?",
        date: "2023.02.10.",
        isCheck: false
    },
    {
        id: 1,
        name: "이름 - 2",
        detail: "혹시 콘텐츠 분석 완료했나요?",
        date: "2023.02.10.",
        isCheck: true
    },
  ]);
  
  
  return (
    <div>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: '100%', flex: 1, margin: "10px" }}>
                <TextField
                    fullWidth
                    id="standard-textarea"
                    multiline
                    variant="standard"
                />

                <IconButton color="primary">
                    <TelegramIcon sx={{ color: "#E31E26" }} />
                </IconButton>
        </Box>
        {messageList.map(message => <Message key={message.id} message={message}/>)}
    </div>
  )
}