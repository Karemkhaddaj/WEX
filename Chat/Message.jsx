/* eslint-disable react/prop-types */

import './Message.css'; // Import CSS file for styling

function Message({ content, sender,timestamp}) {
  timestamp = timestamp.toLocaleString([], { hour: '2-digit', minute: '2-digit' })
  const messageClass = sender === 'You' ? 'message-box you' : 'message-box other';
  

  return (
    <div className={messageClass}>
      <p className="message-sender">{sender}</p>
      <div className="message-content">{content}</div>
      <p className="message-timestamp">{timestamp}</p>
    </div>
  );
}

export default Message;
