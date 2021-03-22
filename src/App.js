import React from 'react';
import './App.css';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import Feed from './feed/Feed';
import Widget from './widget/Widget';
import Login from './login/Login';
import StoriesCreate from './stories/storiesCreate/StoriesCreate';
import { useStateValue } from './stateProvider/StateProvider';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
    {!user ? 
      <Login />
      : 
      <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <div className="appBody">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </Route>
{/* Creating story path */}
        <Route exact path="/stories/create" component={StoriesCreate} />
      </Switch>
      </Router>
      }
    </div>
  );
}

export default App;
