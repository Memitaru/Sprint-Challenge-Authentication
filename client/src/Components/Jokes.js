import React from 'react';
import withAuth from '../helpers/auth.js';
import api from '../helpers/api.js';
import Joke from './Joke';

class Jokes extends React.Component{
    state = {
        jokes: [],
        username: ''
    }

    async componentDidMount(){
        try{
            const res = await api.get('/jokes')
            this.setState({jokes: res.data})
        } catch(err) {
            console.log(err)
        }

        const username = localStorage.getItem('username');
        this.setState({username: username})
    }

    render(){
        return(
            <div>
                <h2>Hi {this.state.username}, I'm dad.</h2>
                {this.state.jokes.map((joke, i) => {
                    return <Joke joke={joke.joke} key={i} />
                })}
            </div>
        )
    }
}

export default withAuth(Jokes)

