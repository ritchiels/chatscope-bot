import React, { useState } from 'react';
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, 
        ChatContainer, 
        MessageList,
        MessageInput, 
        Message, 
        TypingIndicator 
    } from '@chatscope/chat-ui-kit-react';
// import Chatbot from './components/Chatbot';

const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

function App() {
    // const [count, setCount] = useState(0);
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: 'Hello, I am ChatGPT!',
            sender: 'ChatGPT'
        }
    ]);

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user',
            direction: 'outgoing'
        }

        const newMessages = [...messages, newMessage]; //all the old messages + the new message
        //update our messages state
        setMessages(newMessages);
        //set a typing indicator
        setTyping(true);
        //process message to chatGPT (send it over and see a response)
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) {
        // chatMessages { sender: 'user' or 'ChatGPT', message: 'The message conent'}
        // apiMessages { role: 'user' or 'assistant', content: 'The message content'}
        let apiMessages = chatMessages.map((messageObject) => {
            let role = '';
            if(messageObject.sender === 'ChatGPT') {
                role='assistant'
            } else {
                role = 'user'
            }
            return {
                role: role,
                content: messageObject.message
            }
        });

        // roleL 'user' -> message from user, 'assistant' -> response from ChatGPT
        //'system' -> initial message defining HOW ChatGPT will respond

        const systemMessage = {
            role: 'system',
            content: 'Explain like I am a novice web developer.'
        }

        const apiRequestBody = {
            'model': 'gpt-3.5-turbo',
            'messages': [
                systemMessage,
                ...apiMessages
            ]
        }

        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            console.log(data.choices[0].message.content);
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: 'ChatGPT'
                }]
            );
            setTyping(false);
        });
    }

    return (
            <div className='App'>
                <div style={{ position: 'relative', height: '600px', width: '400px' }}>
                    <MainContainer>
                        <ChatContainer>        
                            <MessageList
                                scrollBehavior='smooth'
                                typingIndicator={typing ? <TypingIndicator content='Buddy Bot is typing' /> : null}
                            >
                                {messages.map((message, i) => {
                                    return <Message key={i} model={message} />
                                })}
                            </MessageList>
                            <MessageInput placeholder='Break the ice...' onSend={handleSend} />
                        </ChatContainer>
                    </MainContainer>
                </div>
            </div>
  );
}

export default App;