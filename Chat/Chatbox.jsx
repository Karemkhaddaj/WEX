import React, { useEffect, useState } from 'react';
import './Chatbox.css'; // Ensure the CSS file is correctly linked
import { useNavigate } from 'react-router-dom';

function Chatbox({ id, participants, sender }) {
  const [receiver, setReceiver] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const assignedReceiver = participants.find(participant => participant !== sender);
    setReceiver(assignedReceiver || sender); // Ensure there's always a receiver even if it falls back to the sender
    sessionStorage.setItem("receiver", assignedReceiver);
  }, [participants, sender]);

  function enterChat() {
    navigate("/chatinit");
  }

  return (
    <div className="chatbox" onClick={enterChat}>
      <div className="chat-info">Chat ID: {id}</div>
      <div className="participant-info">Participant: {receiver}</div>
    </div>
  );
}

export default Chatbox;