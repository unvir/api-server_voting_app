const router = require('express').Router();
const crypto = require('crypto');
const { dbInstance, extractResult } = require('../db');

router.post('/login', async (req, res) => {
  const { login, password } = req.body;
  const encryptedPassword = crypto.createHash('sha256').update(password).digest('hex');

  res.json(await extractResult(() => dbInstance.auth.getUser(login, encryptedPassword)));
});

router.post('/login/quick', async (req, res) => {
  const { quickPassword, eventId } = req.body;
  const encryptedPassword = crypto.createHash('sha256').update(quickPassword).digest('hex');

  res.json(await extractResult(
    () => dbInstance.auth.quickLogin(encryptedPassword, eventId),
  ));
});

router.post('/register', async (req, res) => {
  const {
    login, password, fullName, quickPassword,
  } = req.body;
  const encryptedPassword = crypto.createHash('sha256').update(password).digest('hex');
  const encryptedQuickPassword = quickPassword
    ? crypto.createHash('sha256').update(quickPassword).digest('hex')
    : null;

  res.json(await extractResult(
    () => dbInstance.auth.createUser(login, encryptedPassword, fullName, encryptedQuickPassword),
  ));
});

module.exports = router;
