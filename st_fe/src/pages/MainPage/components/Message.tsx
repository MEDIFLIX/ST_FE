import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { InputAdornment } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

const Memo = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: '100%', flex: 1, margin: "10px" }}>
                <TextField
                    fullWidth
                    id="standard-textarea"
                    multiline
                    variant="standard"

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <TelegramIcon sx={{ color: "#E31E26" }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </div>
    );
}

export default Memo;