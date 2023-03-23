import React, { useState, useEffect } from 'react'
import User from './User'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import * as API from '../../../api/API';



export type UserType = {
  adminId: string
  name: string
  phoneNumber: string
  role: string
}

export default function UserList(): React.ReactElement {

  const [userList, setUserList] = useState<UserType[]>([]);

    
  const fetchAdminList = async () => {
    const data = await API.get('/admin/list');
    const list = data.result;
    setCurUserList(list.slice(0,4));
    setUserList(list);
    return data;
  };

  useEffect(() => {
    fetchAdminList();
  },[]);

  // limit: 페이지 당 띄울 Card 개수
  const limit = 4;
  const [page, setPage] = useState(1);
  const LAST_PAGE = Math.ceil(userList.length / limit);

  const [input, setInput] = useState('');

  const handleChangeInput = (event: any) => {
    setInput(event.target.value);
  }

  const [curUserList, setCurUserList] = useState(userList);

  useEffect(() => {
    if (page === LAST_PAGE) {
      setCurUserList(userList.slice(limit * (page - 1)));
    } else {
      setCurUserList(userList.slice(limit * (page - 1), limit * (page - 1) + limit));
    }
  }, [page]);

  const handlePage = (event: any) => {
    const nowPageInt = parseInt(event.target.outerText);
    setPage(nowPageInt);
  }

  useEffect(() => {
    if (page == LAST_PAGE) {
      setCurUserList(userList.filter((item) => item.name.includes(input)).slice(limit * (page - 1)));
    } else {
      setCurUserList(userList.filter((item) => item.name.includes(input)).slice(limit * (page - 1), limit * (page - 1) + limit));
    }
  }, [input]);

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

      <Box sx={{ dispaly: 'absolute', height: '300px' }}>

        {curUserList.map(user => <User key={user.adminId} user={user} />)}

      </Box>



      <Stack alignItems="center">
        <Pagination
          count={LAST_PAGE}
          defaultPage={1}
          hidePrevButton hideNextButton
          size='small'
          onChange={handlePage}
        />
      </Stack>
    </div>
  )
}