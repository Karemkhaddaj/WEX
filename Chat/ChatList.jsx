import { useEffect, useState } from 'react';
import Chatbox from './Chatbox';
import Sidebar from '../NavBar/Sidebar';
import './ChatList.css';

function ChatList() {
  const API = import.meta.env.VITE_REACT_API;
  const [chats, setChats] = useState([]);
  const username = sessionStorage.getItem("username");

  useEffect(() => {
    async function getChats() {
      const response = await fetch(`${API}/getchats?username=${username}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
        }
      });
      if (!response.ok) {
        console.error('Failed to fetch chats:', response.status);
        return;
      }
      const data = await response.json();
      const chatsWithParticipants = data.map(chat => ({
        id: chat.id,
        participants: chat.Participants.filter(p => p !== username)
      }));
      setChats(chatsWithParticipants);
    }
    getChats();
  }, [API, username]);

  return (
    <div className='page-container'>
      <Sidebar />
      <div className='content'>
        <div className='content-header'>Active Chats</div>
        {chats.map(chat => (
          <Chatbox key={chat.id} participants={chat.participants} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
