const express = require('express');
const app = express();
const fs = require("fs").promises;
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  await fs.readFile("./public/index.html").then((data) => {
    res.header("Content-Type", "text/html");
    res.send(data);
  })
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});


// const mainRoute = require('./routes/main');
// const gamesRouter = require('./routes/games');

// app.use(mainRoute, gamesRouter); 

// app.listen(PORT, () => {
  // console.log(`Server is running at PORT http://localhost:${PORT}`);
// });