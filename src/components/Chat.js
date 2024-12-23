import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import { fetchMessages, sendMessage } from "../api";

const Chat = ({ userName }) => {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    try {
      const response = await fetchMessages();
      setMessages(response.data);
    } catch (error) {
      console.error("Erro ao carregar mensagens:", error);
    }
  };

  useEffect(() => {
    loadMessages();

    const interval = setInterval(() => {
      loadMessages();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async (content) => {
    const message = { content, sender: userName };
    try {
      await sendMessage(message);
      loadMessages();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <div>
      <h2>Chat - Usuário: {userName}</h2>
      <MessageList messages={messages} userName={userName} />
      <MessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
