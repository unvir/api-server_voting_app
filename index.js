const express = require('express');
const bodyParser = require('body-parser');
const eventsEndpointHandler = require('./endpoints/events');
const participantsEndpointHandler = require('./endpoints/participants');
const scoresEndpointHandler = require('./endpoints/scores');

const app = express();

app.use(bodyParser.json());
app.use('/events', eventsEndpointHandler);
app.use('/participants', participantsEndpointHandler);
app.use('/scores', scoresEndpointHandler);

app.use((req, res) => {
  res.status(404).send('Oops! Incorrect url');
});

app.use((err, req, res, next) => {
  console.warn(err.stack);
  res.status(500).send('Oops! Something went wrong');
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
