const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const todoRoutes = require('./routes/todos');

app.get('/', (req, res) => res.send('Hey there from root route!'));

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log('App started on port ' + port);
});