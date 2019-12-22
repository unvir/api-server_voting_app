const router = require('express').Router();
const crypto = require('crypto');
const { dbInstance, extractResult } = require('../db');

router.post('/login', async (req, res) => {
  const { login, password } = req.body;
  const encryptedPassword = crypto.createHash('sha256').update(password).digest('hex');
  res.json(await extractResult(() => dbInstance.auth.getUser(login, encryptedPassword)));
});

module.exports = router;
