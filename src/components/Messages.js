import { useEffect, useState } from "react"

function Messages({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('serverMessage', data => {
      setMessages(x => [...x, data]);
    });
  }, [])

  return (
    <ul>
      {messages.map((message, i) => (<li key={i}>{message}</li>))}
    </ul>
  )
}

export default Messages;