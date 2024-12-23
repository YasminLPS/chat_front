import React from "react";

const MessageList = ({ messages, userName }) => {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "10px" }}>
      {messages.map((message) => (
        <div
          key={message.id}
          style={{
            backgroundColor: message.sender === userName ? "#e0ffe0" : "#fff",
            padding: "10px",
            margin: "5px 0",
            border: "1px solid #ddd",
          }}
        >
          <strong>{message.sender}</strong>: {message.content}
          <div style={{ fontSize: "small", color: "#666" }}>
            {new Date(message.timestamp).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
