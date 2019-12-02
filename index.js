const express = require('express');
const bodyParser = require('body-parser');
const eventsEndpointHandler = require('./endpoints/events');

const app = express();

app.use(bodyParser.json());
app.use('/events', eventsEndpointHandler);

app.use((err, req, res) => {
  console.warn(err.stack);
  res.status(500).send('Oops! Something went wrong');
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
