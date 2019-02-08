const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require("socket.io")(server);

mongoose.connect('mongodb://goweek:Anairam7@ds123625.mlab.com:23625/goweek-backend-mariana', {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());

app.use(express.json());

app.use(require('./routes'));

server.listen(3001, () => {
  console.log('server started on port 3001');
});