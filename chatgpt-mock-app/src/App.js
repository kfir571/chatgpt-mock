import ChatBox from './components/ChatBox';
import { useEffect } from "react";

import './App.css';

function App() {

  useEffect(() => {
    function updateVh() {
      const vh = window.visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
    }
  
    updateVh();
  
    window.addEventListener('resize', updateVh);
    window.visualViewport?.addEventListener('resize', updateVh);
    window.visualViewport?.addEventListener('scroll', updateVh);
  
    return () => {
      window.removeEventListener('resize', updateVh);
      window.visualViewport?.removeEventListener('resize', updateVh);
      window.visualViewport?.removeEventListener('scroll', updateVh);
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
