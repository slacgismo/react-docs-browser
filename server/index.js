require('dotenv').config();
const axios = require('axios');
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const gitApi = require('../src/utils/api-github');

// ----------------------------------------- END OF IMPORTS-----------------------------------------

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:3005', // <-- location of the react app were connecting to
    credentials: true,
  }),
);
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(cookieParser('secretcode'));
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded());

let gtoken;

app.get('/', (req, res) => {
  res.send('This page isn\'t for humans!');
});

app.get('/auth', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GHUB_CLIENT_ID}`,
  );
});

app.get('/pipelines/Oauth2', ({ query: { code } }, res) => {
  const body = {
    client_id: process.env.GHUB_CLIENT_ID,
    client_secret: process.env.DEV_GAPP_SECRET,
    code,
  };
  const opts = { headers: { accept: 'application/json' } };
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      gtoken = token;

      res.redirect('http://localhost:3000/pipelines');
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});

// current functional internal method to retrieve token and grant Oauth search priviledges, **needs security improvement**
app.get('/gtoken', (req, res) => {
  res.send(
    `${gtoken}`,
  );
});

// Should always be last route
app.get('*', (req, res) => {
  if (req.path.endsWith('bundle.js')) {
    res.sendFile(path.resolve(__dirname, '../dist/main.bundle.js'));
  } else {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
