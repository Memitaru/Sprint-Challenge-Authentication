import React from 'react';
import './App.css';
import {Route, NavLink, withRouter} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Jokes from './Components/Jokes';
import styled from 'styled-components';

const LogoutButton = styled.button`
  border: none;
  background-color: dodgerblue;
  color: #002A32;
  cursor: pointer;
`


class App extends React.Component {

  logout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render(){
    return(
      <div className="App">
        <ul className="navbar">
          <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          <li><NavLink to="/signup" activeClassName="active">Sign Up</NavLink></li>
          <li><NavLink to="/jokes" activeClassName="active">To The Jokes</NavLink></li>
          <li><LogoutButton onClick={this.logout}>Logout</LogoutButton></li>
        </ul>
        <h1>Welcome to Dad Jokes</h1>
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
