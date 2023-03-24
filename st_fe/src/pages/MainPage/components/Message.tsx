import React, { useState } from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { MessageType } from './MessageList'
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';


type MessageProps = {
    message: MessageType // 부모컴포넌트에서 import 해온 타입을 재사용 해 줍시다.
}

const CardContainer = styled.div`
    position: "grid";
    margin: "10px";
  `;

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-color: #E7E7E7;
    border-style:solid;
    border-width: 0px 0px 1px 0px;
  `;

const CardNameContainer = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    maxWidth: "100%";
    flex-basis: 100%;
`;

const CardDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center; 
`;

const CardButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-item: center;
`;



const Message = ({ message }: MessageProps) => {
    const { name, content, createDate, isCheck } = message;
    const [checked, setChecked] = useState(isCheck);

    const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    return (
        <div>

            <CardContainer>
                <Card>
                    <AccountCircleIcon sx={{ color: "#B7B7B7", fontSize: "38px" }} />
                    <CardNameContainer>
                        <p style={{ marginBottom: "5px", fontSize: "13px" }} >{name}</p>
                        <p style={{ color: "#474747", fontSize: "11px" }}>{content}</p>
                    </CardNameContainer>

                    <CardDateContainer>
                        <p style={{ color: "#6F6F6F", fontSize: "10px" }}>{createDate}</p>
                        <CardButtonContainer>
                            <Checkbox
                                checked={checked}
                                onChange={handleChangeCheck}
                                icon={<CheckCircleOutlineIcon sx={{ color: "#89E35F", fontSize: "13px" }} />}
                                checkedIcon={<CheckCircleIcon sx={{ color: "#89E35F", fontSize: "13px" }} />}
                            />
                            <IconButton color="primary">
                                <ChatBubbleOutlineIcon sx={{ color: "#ECC663", fontSize: "13px" }} />
                            </IconButton>
                        </CardButtonContainer>
                    </CardDateContainer>


                </Card>
            </CardContainer>
        </div>
    );
}

export default Message;