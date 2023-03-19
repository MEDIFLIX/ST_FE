import React, { useState } from 'react'
import User from './User'
import Pagination from '@mui/material/Pagination';
import CircleIcon from '@mui/icons-material/Circle';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';



// 자식컴포넌트로 넘겨주기위해 export해 줍시다.
export type UserType = {
  id: number
  name: string
  role: string
}

export type PageType = {
  total: number
  limit: number
  page: number

}



export default function UserList(): React.ReactElement {
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [input, setInput] = useState('');

  const handleChangeInput = (event:any) =>{
    setInput(event.target.value);
  }

  // userList Array state에 제네릭 타입을 지정해 줍니다.
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


  const searched = userList.filter((item) =>
    item.name.includes(input)
  );

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
      
      {searched.slice(offset, offset+limit).map(user=> <User key={user.id} user={user}/>)}
      
      <div style={{ margin: "auto" }}>

      </div>
      <Stack alignItems="center">
        <Pagination
          count={offset + limit}
          hidePrevButton hideNextButton
          size='small'
          renderItem={(item) => (
            <PaginationItem

              {...item}
            />
          )} />
      </Stack>

      {/* {userList.map(user => <User key={user.id} user={user}/>)} */}
    </div>
  )
}