const express = require('express');
const app = express();
const fs = require("fs").promises;
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('./middlewares/cors');

const mainRouter = require("./routes/main");
const gamesRouter = require('./routes/games');

const PORT = 3000;

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  mainRouter,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});