import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'
import './App.css'
import { Chatbot } from 'supersimpledev'

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [{
    message: 'hello chatbot',
    sender: 'user',
    id: 'id1',
    time: 1736127288920
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2',
    time: 1736127291230
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3',
    time: 1736127385356
  }, {
    message: 'Today is September 27',
    sender: 'robot',
    id: 'id4',
    time: 1736127385500
  }]);
  useEffect(() => {
    Chatbot.addResponses({
      'how are you': 'thanks for the question how about you?',
      'which is the capital of Macedonia': 'Skopje is capital city of Macedonia',
      'ronaldo or messi': 'ronaldo is the goat'
    })
  }, [])
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])

  //const [chatMessages,setChatMessages]=array; - array destructuring

  return (
    <div className='app-container'>
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}


export default App
