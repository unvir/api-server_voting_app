const router = require('express').Router();
const { dbInstance, extractResult } = require('../db');

router.get('/:eventId', async (req, res) => {
  res.json(await extractResult(() => dbInstance.participants.getParticipants(req.params.eventId)));
});

module.exports = router;
