import { Search } from '@mui/icons-material';
import { Box, InputAdornment, TextField } from '@mui/material';
import styled from 'styled-components';
import OriginalContentList from './OrignialContentList';

const ContentSearchContainer = styled.div`
  width: 95%;
  height: 100%;

  .original_buttonBox {
    display: flex;
    width: 40%;
    justify-content: space-between;
  }
`;

type ButtonLabelProp = {
  backgroundColor: string;
};

const ButtonLabel = styled.button<ButtonLabelProp>`
  border: none;
  border-radius: 5px;
  width: 61px;
  height: 21px;
  padding: 7px;
  line-height: 10px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
`;

const ContentSearch = () => {
  return (
    <ContentSearchContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          maxWidth: '100%',
          flex: 1,
          margin: '10px',
          borderRadius: '10px',
        }}
      >
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="콘텐츠를 검색하세요"
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
      <div className="original_buttonBox">
        <ButtonLabel backgroundColor="#EFEAEA">조회수별</ButtonLabel>
        <ButtonLabel backgroundColor="#EFEAEA">업로드순</ButtonLabel>
        <ButtonLabel backgroundColor="#EFEAEA">관리요함</ButtonLabel>
        <ButtonLabel backgroundColor="#EFEAEA">신경요함</ButtonLabel>
        <ButtonLabel backgroundColor="#EFEAEA">성과진행</ButtonLabel>
      </div>
      <OriginalContentList />
    </ContentSearchContainer>
  );
};

export default ContentSearch;
