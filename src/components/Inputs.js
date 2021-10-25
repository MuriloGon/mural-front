import { useState } from "react"

function Inputs({ socket }) {
  const [username, setUsername] = useState('');
  const [message, setMsg] = useState('');

  const sendMessage = () => {
    socket.emit('sendToAll', { username, message });
  }

  return (
    <form>
      <input value={username} onChange={({ target }) => setUsername(target.value)} />
      <input value={message} onChange={({ target }) => setMsg(target.value)} />
      <button type="button" onClick={sendMessage}>Enviar mensagem</button>
    </form>
  )
}

export default Inputs;