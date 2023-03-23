import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import { useRecoilState } from 'recoil';
import { MemoState, memoState } from '../../../atom';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const Title = styled.div`
  color: #303030;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

const ListBox = styled.div`
  overflow: auto;
  height: 130px;
`;

const Memo = () => {
  const [memo, setMemo] = useRecoilState<MemoState[]>(memoState);
  const [text, setText] = useState<string>('');
  const [checked, setChecked] = useState<number[]>([]);

  const handleToggle = (idx: number) => () => {
    const currentIndex = checked.indexOf(idx);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(idx);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const handleSubmit = () => {
    const labelId = `checkbox-list-label-${text}`;

    setMemo((current) => [...current, { value: text, id: labelId }]);
    setText('');
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetIdx = memo.findIndex((data) => data.id === e.currentTarget.id);
    if (targetIdx !== -1) {
      setMemo((current) => {
        const copy = [...current];
        copy.splice(targetIdx, 1);
        return copy;
      });
    }
  };

  return (
    <div>
      <Title>오늘의 할일</Title>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          maxWidth: '100%',
          flex: 1,
          marginLeft: '10px',
          marginRight: '10px',
        }}
      >
        <TextField
          fullWidth
          id="standard-textarea"
          placeholder="메모를 입력하세요."
          variant="standard"
          onChange={handleChangeText}
          value={text}
        />

        <IconButton color="primary" onClick={handleSubmit}>
          <EditOutlinedIcon sx={{ color: '#E31E26' }} />
        </IconButton>
      </Box>
      <ListBox>
        <List sx={{ width: '100%', maxWidth: '300px', bgcolor: 'background.paper' }}>
          {memo.map((data, idx) => {
            const labelId = `checkbox-list-label-${data.value}`;

            return (
              <ListItem
                key={labelId}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments" id={labelId} onClick={handleDelete}>
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(idx)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(idx) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={data.value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </ListBox>
    </div>
  );
};

export default Memo;
