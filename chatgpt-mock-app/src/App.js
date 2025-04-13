import ChatBox from './components/ChatBox';
import { useEffect } from "react";

import './App.css';

function App() {

  useEffect(() => {
    function setVhVariable() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVhVariable();
    window.addEventListener('resize', setVhVariable);
    window.addEventListener('load', setVhVariable);

    return () => {
      window.removeEventListener('resize', setVhVariable);
      window.removeEventListener('load', setVhVariable);
    };
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <ChatBox />
      </header>
    </div>
  );
}

export default App;
