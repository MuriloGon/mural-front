import logo from './logo.svg';
import './App.css';

const { io } = require("socket.io-client");
const socket = io('http://localhost:3001');

function App() {
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
