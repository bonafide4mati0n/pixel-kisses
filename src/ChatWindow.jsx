import React from 'react';

export default function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((m, i) => (
        <div key={i} className={`msg ${m.role}`}>
          <div className="bubble">
            <span className="role">{m.role}</span>
            <p>{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
