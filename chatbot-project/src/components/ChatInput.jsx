import { useState} from 'react'
import { Chatbot} from 'supersimpledev'
import SpinnerImage from '../assets/loading-spinner.gif'
import './ChatInput.css'
import dayjs from 'dayjs';
  
 export function ChatInput({ chatMessages, setChatMessages }) {
      const [isLoading, setIsLoading] = useState(false);
      const [inputText, setInputText] = useState('');
      function saveInputText(event) {
        setInputText(event.target.value);
      }
      async function sendMessage() {
        if (inputText === '' || isLoading) return;
        setIsLoading(true)
        setInputText('')
        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
            time: dayjs().valueOf()
          }
        ]

        setChatMessages([
          ...newChatMessages,
          {
            message: <img src={SpinnerImage} className="loading-spinner" />,
            sender: 'robot',
            id: "loading"
          }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setIsLoading(false);
        setChatMessages([
          ...newChatMessages.filter(m => m.id !== 'loading'),
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID(),
            time: dayjs().valueOf()
          }
        ]);


      }
      function submitMessage(event) {
        if (event.key === 'Enter') sendMessage()
        else if (event.key === 'Escape') setInputText('')
      }
      function clearMessages(){
        setChatMessages([])
      }
      return (
        <div className='chat-container'>
          <input
            className='chat-input'
            placeholder="Send a message to Chatbot"
            size="30"
            onKeyDown={submitMessage}
            onChange={saveInputText}
            value={inputText}
          />
          <button className='send-btn' disabled={isLoading} onClick={sendMessage}>Send</button>
          <button className='clear-btn' disabled={isLoading} onClick={clearMessages}>Clear</button>
        </div>
      );
    }