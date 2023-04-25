import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ThemeProvider } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import { Container, Typography, TextField, Button } from '@material-ui/core'
import { createTheme } from '@mui/system';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'darkblue',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chatbotContainer: {
        background: 'white',
        padding: theme.spacing(4),
        borderRadius: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    input: {
        marginBottom: theme.spacing(2),
    },
}));

const Chatbot = () => {
    const classes = useStyles();
    const [inputText, setInputText] = useState('');
    const [botPosition, setBotPosition] = useState({ x: 0, y: 0 });

    const handleInputSubmit = () => {
        // Send input text to chatbot API
        // Retrieve response from chatbot API
        // Update bot position using setBotPosition
    };

    const botAnimation = useSpring({
        to: { transform: `translate(${botPosition.x}px, ${botPosition.y}px)` },
        config: { duration: 500 }
    });

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Container maxWidth='sm' className={classes.chatbotContainer}>
                    <Typography variant='h4' component='h1' className={classes.title}>
                        Let's Chat
                    </Typography>
                    <animated.img
                        src='/src/chatbot.png'
                        // height='100vh'
                        style={botAnimation}
                        onMouseDown={(e) => setBotPosition({ x: e.clientX, y: e.clientY })}
                    />
                    <TextField
                        variant='outlined'
                        label='Break the ice...'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className={classes.input}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={handleInputSubmit}
                    >
                        Submit
                    </Button>
                </Container>
            </div>
        </ThemeProvider>
    );
};

export default Chatbot;