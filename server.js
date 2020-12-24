require('dotenv').config();
const { join, resolve } = require('path');
const express = require('express');

const app = express();

app.use(express.static(join(__dirname, 'client', 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./controllers'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('/*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'build', 'index.html'))
  })

};

require('./config')
  .then(() => app.listen(process.env.PORT || 3001), () => {
    console.log(`App now listening on localhost:${process.env.PORT}// :)`)
  })
  .catch(e => console.error(e));
