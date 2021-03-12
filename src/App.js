import React from 'react';
import './App.css';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import Feed from './feed/Feed';
import Widget from './widget/Widget';
import Login from './login/Login';
import { useStateValue } from './stateProvider/StateProvider';
function App() {
  const [{user}, dispatch] = useStateValue();
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
