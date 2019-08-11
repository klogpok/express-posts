const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/home');
const postsRoutes = require('./routes/posts');
const addRoutes = require('./routes/add');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use('/', homeRoutes);
app.use('/api/posts/', postsRoutes);
app.use('/api/posts/add', addRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
