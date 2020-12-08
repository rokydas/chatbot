import './App.css';
import ChatBox from './components/ChatBox/ChatBox';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;