import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Inputs from './components/Inputs';
import Messages from './components/Messages';

const { io } = require("socket.io-client");
const socket = io('http://localhost:3001');

function App() {

  return (
    <div className="App">
      <Messages socket={socket} />
      <Inputs socket={socket} />
    </div>
  );
}

export default App;
