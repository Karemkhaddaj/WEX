import './Message.css';

function Message({ content, sender, timestamp }) {
  // Ensure the timestamp is a Date object and format it
  const displayTime = timestamp ? new Date(timestamp).toLocaleString([], { hour: '2-digit', minute: '2-digit' }) : '';

  const messageClass = sender === 'You' ? 'message-box you' : 'message-box other';

  return (
    <div className={messageClass}>
      <p className="message-sender">{sender}</p>
      <div className="message-content">{content}</div>
      <p className="message-timestamp">{displayTime || 'Time not available'}</p>
    </div>
  );
}

export default Message;
