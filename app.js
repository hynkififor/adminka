const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.status(404).send('<h1>Страница не найдена</h1>');
  });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

// const mainRoute = require('./routes/main');
// const gamesRouter = require('./routes/games');

// app.use(mainRoute, gamesRouter); 

// app.listen(PORT, () => {
  // console.log(`Server is running at PORT http://localhost:${PORT}`);
// });