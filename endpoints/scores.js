const router = require('express').Router();
const { dbInstance, extractResult } = require('../db');

router.get('/:eventId', async (req, res) => {
  res.json(await extractResult(() => dbInstance.scores.getScoredParticipants(req.params.eventId)));
});

router.get('/:eventId/:judgeId', async (req, res) => {
  res.json(await extractResult(
    () => dbInstance.scores.getScoredParticipantsFromJudge(req.params.eventId, req.params.judgeId),
  ));
});

router.put('/', async (req, res) => {
  const {
    eventId, userId, participantId, score,
  } = req.body;
  res.json(await extractResult(
    () => dbInstance.scores.putScore(eventId, participantId, userId, score),
  ));
});

module.exports = router;
