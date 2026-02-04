import { ChatMessage } from './ChatMessage.jsx'
import { useRef, useEffect } from 'react'
import './ChatMessages.css'

function useAutoScroll(dependencices) {
    const containerRef = useRef(null);

    useEffect(() => {
        const containerElem = containerRef.current
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight
        }
    }, [dependencices]);
    return containerRef;
}
 function ChatMessages({ chatMessages }) {


    const chatMessagesRef = useAutoScroll([chatMessages]);
    return (
        <div className='chat-messages-container' ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                        time={chatMessage.time}
                    />
                );
            })}
        </div>
    );
}
export default ChatMessages;