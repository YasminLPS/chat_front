import React, { useState } from "react";

const MessageForm = ({ onSendMessage }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSendMessage(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Digite sua mensagem"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ flex: "1" }}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MessageForm;
