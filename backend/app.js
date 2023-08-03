const express = require('express');

const db = require('./data/database');
const todosRoutes = require('./routes/todos.routes');
const enableCors = require('./middlewares/cors');

const app = express();
const port = process.env.PORT || 3000;
const url = "https://to-do-list-2h1q.onrender.com"

app.use(enableCors);
app.use(express.json());

app.use(url, todosRoutes);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: 'Something went wrong!',
  });
});

db.initDb()
.then(function () {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
})
.catch(function (error) {
  console.log('Failed to connect to the database!');
  console.log(error);
  });