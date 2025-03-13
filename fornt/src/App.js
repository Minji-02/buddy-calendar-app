import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //  back 연결 테스트 코드
  const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch("/user")
      .then(res => res.text())
      .then(m=>setMessage(m))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
