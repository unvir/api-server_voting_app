const router = require('express').Router();
const { dbInstance, extractResult } = require('../db');

router.get('/:eventId', async (req, res) => {
  res.json(await extractResult(() => dbInstance.scores.getScoredParticipants(req.params.eventId)));
});

module.exports = router;
