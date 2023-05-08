import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import ChatRoom from './components/Chatroom';
import ChatDisplay from './components/ChatDisplay';
import ChatUser from './components/ChatUser';
import Register from './components/Register';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    if (sessionStorage.getItem('user') != null)
      handleLoginSuccess();
  }, [])

  const handleLoginSuccess = () => {
    document.title = JSON.parse(sessionStorage.getItem('user')).username
    setIsLoggedIn(true);
  };
  
  return (
    <div className="App">
      <header className="App-header">
      <div style={{ display: "flex", justifyContent: "center" }}>
    {!isLoggedIn && (
      <>
        <div style={{ marginRight: "20px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Login onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Register onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      </>
    )}
    {isLoggedIn && (
      <>
        <div>
        <ChatUser/>
          <ChatRoom />
          <button className='submitButton'
            onClick={() => {
              sessionStorage.clear();
              setIsLoggedIn(false);
              window.location.reload();
            }}
            style={{ marginTop: "10px" }}
          >
            Log out
          </button>
        </div>
        <div style={{ margin: "20px" }}>
          Recipients:
        <ChatUser />
        </div>
      </>
    )}
  </div>      </header>
    </div>
  );
}

export default App;
