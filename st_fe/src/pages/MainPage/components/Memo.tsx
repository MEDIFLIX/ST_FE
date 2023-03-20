import React, {useState} from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';


const Title = styled.div`
    color: #303030;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    margin-bottom: 30px
`;


const Memo = () => {
    const [text, setText] = useState<string>("");
    const [memo, setMemo] = useState<string>("");

    const handleChangeText = (event:any) =>{
        setText(event.target.value);
    };

    const handleSubmit = () =>{
        setMemo("");
        setMemo(text);
    }

    
    return (
        <div>
            <Title>오늘의 할일</Title>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: '100%', flex: 1, margin: "10px" }}>
                <TextField
                    fullWidth
                    id="standard-textarea"
                    placeholder="메모를 입력하세요."
                    variant="standard"
                    multiline
                    onChange = {handleChangeText}
                />

                <IconButton color="primary" onClick={handleSubmit}>
                    <EditOutlinedIcon sx={{ color: "#E31E26" }} />
                </IconButton>
            
            </Box>
          
            <textarea style={{margin: '10', border:'none'}} value={memo} rows={10} cols={45} readOnly></textarea>
            
        </div>
    );
}

export default Memo;