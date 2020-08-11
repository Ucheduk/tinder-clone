import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import ChatScreen from './pages/ChatScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chat" component={Chat} />
          <Route path="/chat/:person" component={ChatScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;