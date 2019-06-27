var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var router = require('./routes/suggestion-routes');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', router);
app.use('/api/v1/', router);

app.all('*', (req, res) => {
  res.status(404).json({ status: 404, error: 'The requested URL is not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log(`SERVER RUNNING ON PORT: ${PORT}`);
});

// export default app;

module.exports = app;
