const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index')

const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter)

app.get('/', (req, res) => {
  res.render('upload');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

