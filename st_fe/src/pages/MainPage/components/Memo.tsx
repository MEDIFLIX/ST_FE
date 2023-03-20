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
            <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: '100%', flex: 1, marginLeft: "10px", marginRight: "10px" }}>
                <TextField
                    fullWidth
                    id="standard-textarea"
                    placeholder="메모를 입력하세요."
                    variant="standard"
                    onChange = {handleChangeText}
                />

                <IconButton color="primary" onClick={handleSubmit}>
                    <EditOutlinedIcon sx={{ color: "#E31E26" }} />
                </IconButton>
            
            </Box>
          
            <textarea style={{margin: '10px', border:'none', resize: 'none'}} value={memo} rows={8} cols={35} readOnly></textarea>
            
        </div>
    );
}

export default Memo;