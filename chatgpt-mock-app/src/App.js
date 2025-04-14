import ChatBox from './components/ChatBox';
import { useEffect } from "react";

import './App.css';

function App() {

  useEffect(() => {
    const setRealVh = () => {
      const vh = window.visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
    };
  
    setRealVh();
  
    window.visualViewport?.addEventListener('resize', setRealVh);
    window.visualViewport?.addEventListener('scroll', setRealVh);
    window.addEventListener('resize', setRealVh);
  
    return () => {
      window.visualViewport?.removeEventListener('resize', setRealVh);
      window.visualViewport?.removeEventListener('scroll', setRealVh);
      window.removeEventListener('resize', setRealVh);
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
