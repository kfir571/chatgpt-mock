import ChatBox from './components/ChatBox';
import './App.css';

function App() {

  function setVhVariable() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  window.addEventListener('resize', setVhVariable);
  setVhVariable(); 
  
  return (
    <div className="App">
      <header className="App-header">
        <ChatBox />
      </header>
    </div>
  );
}

export default App;
