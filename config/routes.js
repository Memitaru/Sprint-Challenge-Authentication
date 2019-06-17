const axios = require('axios');
const bcrypt = require('bcryptjs');
const tokenService = require('../auth/token-service.js');

const { authenticate } = require('../auth/authenticate');

const Users = require('./model.js');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12)
  user.password = hash;

  Users.add(user)
    .then(newUser => {
      const token = tokenService.generateToken(user);
      res.status(201).json({newUser, message: `Registered with ${token}`})
    })
    .catch(err => {
      res.status(500).json(err.message)
    })
}

function login(req, res) {
  let {username, password} = req.body;
  
  Users.findBy({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)){
        const token = tokenService.generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!, have a token...`,
          token
        })
      } else {
        res.status(401).json({message: 'Invalid credentials'})
      }
    })
    .catch(err => {
      res.status(500).json(err.message)
    })
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
