import React from 'react';
import { Send } from '@mui/icons-material';
import chatbot from './chatbot.png';
import './App.css';
import { Container, 
        Typography, 
        Paper, 
        TextField, 
        IconButton, 
        InputAdornment,} from '@mui/material';
// import Chatbot from './components/Chatbot';


function App() {
    return (
        <Container
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#EFF2EF',
            p: 0, 
            m: 'auto'
        }}>
                <Paper 
                elevation={6}
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    margin: 'auto',
                    width: '40%',
                    p: 4,
                    backgroundColor: '#98C1D9'
                    // width: '100%'
                }}
                >
                    <Typography 
                        variant='h5'
                        sx={{ mt: 4, textAlign: 'center', color: '#E6FFFFFF' }}
                        style={{ fontFamily: 'Comfortaa' }}
                    >
                        Let's chat !
                    </Typography>

                    <img src={chatbot} alt='bot' />

                        <div style={{ display: 'flex', width: '80%' }}>
                            <TextField
                            variant='filled'
                            size='small'
                            multiline
                            label='Break the ice...'
                            InputLabelProps={{ style: { color: '#BFFFFFFF'}}}
                            inputProps={{ style: { color: '#BFFFFFFF' } }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton 
                                            edge="end" 
                                            color="secondary"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                marginTop: 'auto',
                                                marginBottom: 'auto',
                                                marginRight: '2px',
                                                height: '100%',
                                                display: 'flex',
                                            }}
                                            >
                                            <Send />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ 
                                my: 4, 
                                '& .MuiInputBase-input': {color: '#BFFFFFFF'},
                                minWidth: '100%'
                            }}
                            />
                            
                            {/* <IconButton sx={{ 
                                color: '#BFFFFFFF', 
                                marginLeft: 1,
                                }} >
                                <Send />
                            </IconButton> */}
                        </div>
                    {/* <Button variant="outlined" endIcon={<Send />}></Button> */}

                </Paper>
        </Container>
  );
}

export default App;
