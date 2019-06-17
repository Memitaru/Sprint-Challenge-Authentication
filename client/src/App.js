import React from 'react';
import './App.css';
import {Route, NavLink, withRouter} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Jokes from './Components/Jokes';

class App extends React.Component {

  logout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render(){
    return(
      <div>
        <h1>Welcome to Dad Jokes</h1>
        <ul>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
          <li><NavLink to="/jokes">To The Jokes</NavLink></li>
          <li><button onClick={this.logout}>Logout</button></li>
        </ul>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/jokes" component={Jokes} />
        </main>
      </div>
    )
  }
}

export default withRouter(App);
