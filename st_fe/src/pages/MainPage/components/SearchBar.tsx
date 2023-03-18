import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';




function SearchBar() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: '100%', flex: 1, margin: "10px" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        placeholder='관리자를 검색하세요.'
        type="search"
        variant="outlined"

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
