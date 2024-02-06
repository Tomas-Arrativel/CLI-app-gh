const express = require('express');
const app = express();
const axios = require('axios').default;

app.set('view engine', 'ejs');

// Home page and quote of the day
app.get('/', (req, res) => {
  axios
    .get('https://zenquotes.io/api/today')
    .then(({ data }) => res.render('home', { qod: data[0].h }))
    .catch((err) => {
      console.log(err);
    });
});

// Random quote
app.get('/random', (req, res) => {
  axios
    .get('https://zenquotes.io/api/random')
    .then(({ data }) => res.render('random', { random: data[0].h }))
    .catch((err) => console.log(err));
});

// List of about 50 quotes
app.get('/list', (req, res) => {
  axios
    .get('https://zenquotes.io/api/quotes')
    .then(({ data }) => res.render('list', { list: data }))
    .catch((err) => console.log(err));
});

const port = 5000;
app.listen(port, () => console.log('Server running on port ' + port));
