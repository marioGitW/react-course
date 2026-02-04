import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/profile-1.jpg';
import dayjs from 'dayjs'
import './ChatMessage.css'

export function ChatMessage({ sender, message, time }) {
  return (
    <div className={sender === 'robot' ? 'robot-chat-message' : 'user-chat-message'}>
      
      {sender === 'robot' && (
        <img
          className="chat-message-profile"
          src={RobotProfileImage}
        />
      )}

      <div className="chat-message-content">
        <div className="chat-message-text">{message}</div>
        {time && (
          <div className="chat-message-time">
            {dayjs(time).format('h:mma')}
          </div>
        )}
      </div>

      {sender === 'user' && (
        <img
          className="chat-message-profile"
          src={UserProfileImage}
        />
      )}
    </div>
  );
}
