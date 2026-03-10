import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await fetch("/functions/v1/ai-chat", {
      method: "POST",
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div>
      <h2>AI Assistant</h2>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>
        Ask AI
      </button>

      <p>{response}</p>
    </div>
  );
}
