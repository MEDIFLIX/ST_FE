import React, { useState, useEffect } from 'react'
import User from './User'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

export type UserType = {
  id: number
  name: string
  role: string
}

export default function UserList(): React.ReactElement {
  const [userList, setUserList] = useState<UserType[]>([
    {
      id: 0,
      name: "이름 - 1",
      role: "역할",

    },
    {
      id: 1,
      name: "이름 - 2",
      role: "역할",
    },
    {
      id: 2,
      name: "이름 - 3",
      role: "역할",
    },
    {
      id: 3,
      name: "이름 - 4",
      role: "역할",
    },
    {
      id: 4,
      name: "이름 - 5",
      role: "역할",
    },
    {
      id: 5,
      name: "이름 - 6",
      role: "역할",
    },
    {
      id: 6,
      name: "이름 - 7",
      role: "역할",
    },
    {
      id: 7,
      name: "이름 - 8",
      role: "역할",
    },

  ]);


  // limit: 페이지 당 띄울 Card 개수
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const LAST_PAGE = Math.ceil(userList.length / limit);

  const [input, setInput] = useState('');

  const handleChangeInput = (event: any) => {
    setInput(event.target.value);
  }

  const [curUserList, setCurUserList] = useState(userList);

  useEffect(() => {
    if(page === LAST_PAGE){ 
      setCurUserList(userList.slice(limit * (page - 1)));
    } else {
      setCurUserList(userList.slice(limit * (page - 1), limit * (page - 1) + limit));
    }  
  }, [page]);

  const handlePage = (event:any) => {
    const nowPageInt = parseInt(event.target.outerText);
    setPage(nowPageInt);
  }

  useEffect(()=>{
    if(page == LAST_PAGE){
      setCurUserList(userList.filter((item) => item.name.includes(input)).slice(limit * (page - 1)));
    }else {
      setCurUserList(userList.filter((item) => item.name.includes(input)).slice(limit * (page - 1), limit * (page - 1) + limit));
    }  
  },[input]);

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: '100%', flex: 1, margin: "10px" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder='관리자를 검색하세요.'
          type="search"
          variant="outlined"
          onChange={handleChangeInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      
      {curUserList.map(user => <User key={user.id} user={user} />)}
      
      <Stack alignItems="center">
        <Pagination
          count={3}
          defaultPage = {1}
          hidePrevButton hideNextButton
          size='small'
          onChange={handlePage}
          />
      </Stack>
    </div>
  )
}