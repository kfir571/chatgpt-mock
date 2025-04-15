import { useEffect, useState } from "react";

import './App.css';
import MainSidebar from './components/MainSidebar';
import ChatBox from './components/ChatBox';

function App() {
  const [collapsed, setCollapsed] = useState(false);

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

  const handleToggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="App">
      <header className="App-header">
        <MainSidebar collapsed={collapsed} setCollapsed={handleToggleSidebar} />
        <ChatBox collapsed={collapsed} />
      </header>
    </div>
  );
}

export default App;
