import React, { useState, useEffect, useRef } from 'react';
import './Chats.css';
import Message from './Message';
import EmojiPicker from 'emoji-picker-react';
import { useNavigate } from 'react-router-dom';

function Chats({ id, client, username }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (emojiObject, event) => {
    console.log('Selected emoji:', emojiObject);
    setMessage(prev => prev + emojiObject.emoji);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch(`/api/getmessages?chatid=${id}`);
      if (response.ok) {
        const data = await response.json();
        const formattedMessages = data.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp.seconds * 1000)
        }));
        setMessages(formattedMessages);
      }
    };
    if (id) getMessages();
  }, [id]);

  useEffect(() => {
    if (client) {
      client.onmessage = (msg) => {
        const messageData = JSON.parse(msg.data);
        if (messageData.type === 'message') {
          // Convert timestamp right before updating state
          messageData.timestamp = new Date(messageData.timestamp);
          setMessages(prevMessages => [...prevMessages, messageData]);
        }
      };
    }
  }, [client]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message && client && client.readyState === WebSocket.OPEN) {
      const newMessage = {
        type: 'message',
        chatID: id,
        sender: username,
        content: message,
        timestamp: Date.now() // Use Date.now() to get the current timestamp in milliseconds
      };
      client.send(JSON.stringify(newMessage));
      setMessage('');
    }
  };


  return (
    <div className="chat-container">
      <div ref={messageContainerRef} className="message-container">
        {messages.map((msg, index) => (
          <Message key={index} content={msg.content} sender={msg.sender === username ? 'You' : msg.sender} timestamp={msg.timestamp} />
        ))}
      </div>
      <div className="input-container">
        <button onClick={toggleEmojiPicker} className="emoji-button">😊</button>
        {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
          className="message-input"
        />
        <button onClick={sendMessage} className="send-button">Send</button>
      </div>
    </div>
  );
}
export default Chats;
