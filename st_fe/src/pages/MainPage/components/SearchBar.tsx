import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import React, {useState} from 'react';



function SearchBar() {
  const [input, setInput] = useState('');

  const handleChangeInput = (event:any) =>{
    setInput(event.target.value);
  }

  return (
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
  );
}

export default SearchBar;
