const express = require('express');
const app = express();
const fs = require("fs").promises;
const path = require('path');

const mainRouter = require("./routes/main");
const gamesRouter = require('./routes/games');;

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoute, gamesRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});