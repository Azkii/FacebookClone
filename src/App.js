import React from 'react';
import './App.css';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import Feed from './feed/Feed';
import Widget from './widget/Widget';
import Login from './login/Login';
function App() {
  const user = false;
  return (
    <div className="app">
    {!user ? 
      <Login />
      : 
      <>
      <Header />
      <div className="appBody">
        <SideBar />
        <Feed />
        <Widget />
      </div>
      </>}
    </div>
  );
}

export default App;
