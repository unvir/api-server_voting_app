const router = require('express').Router();
const { dbInstance, extractResult } = require('../db');

router.get('/user/:userId', async (req, res) => {
  res.json(await extractResult(() => dbInstance.events.getFeatured(req.params.userId)));
});

router.post('/user', async (req, res) => {
  const { userId, eventId } = req.body;
  res.json(await extractResult(() => dbInstance.events.addFeatured(userId, eventId)));
});

router.get('/:eventId', async (req, res) => {
  res.json(await extractResult(() => dbInstance.events.getEvent(req.params.eventId)));
});

module.exports = router;
