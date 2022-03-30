import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import AddFriend from './components/AddFriend';
import Friends from './components/Friends';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h2>FRIENDS INFORMATION</h2>
        <Link className="link" to="/login">LOGIN</Link>
        <Link className="link" to="/friends">FRIENDS</Link>
        <Link className="link" to="/friends/add">ADD FRIENDS</Link>
        <Link className="link" to="/logout">LOGOUT</Link>
      </header>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route exact path="/login">
        <Redirect to="/"/>
      </Route>
      <PrivateRoute exact path="/friends" component={Friends}/>
      <PrivateRoute exact path="/friends/add" component={AddFriend}/>
      <PrivateRoute exact path="/logout" component={Logout}/>
    </div>
    </Router>
  );
}

export default App;
