import React from 'react';
import api from '../helpers/api.js';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  align-items: center;
  margin: 20px auto;
`

const Input = styled.input`
  margin-bottom: 10px;
  border: 1px solid #002A32;
  padding: 10px;
`

const SignUpButton = styled.button`
  margin-top: 10px;
  background-color: dodgerblue;
  color: white;
  border: none;
  padding: 15px;
`

const Title = styled.h2`
    text-align: center;
    padding-top: 10px;
`

class Signup extends React.Component{
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault()

        try {
            const {username, password} = this.state;
            const result = await api.post('/register', {username, password})
            this.props.history.push('/login')
            console.log(result)
        } catch(err) {
            console.log(err)
        }
    }

    render(){
        return(
            <div>
                <Title>Signup</Title>
                <Form onSubmit={this.handleSubmit}>
                    <Input 
                        type="text" 
                        name="username" 
                        onChange={this.handleChange}
                        placeholder="Username"
                        value={this.state.username}
                    />
                    <Input 
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                        value={this.state.password}
                    />
                    <SignUpButton type="submit">Sign Up</SignUpButton>
                </Form>
            </div>
        )
    }
}

export default withRouter(Signup);