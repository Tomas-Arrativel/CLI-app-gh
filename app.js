const express = require('express');
const app = express();
const axios = require('axios').default;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  axios
    .get('https://zenquotes.io/api/today')
    .then(({ data }) => {
      res.render('home', { qod: data[0].h });
    })
    .catch((err) => {
      console.log(err);
    });
});

const port = 5000;
app.listen(port, () => console.log('Server running on port ' + port));
