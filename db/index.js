const pgPromise = require('pg-promise');
const config = require('config');
const Events = require('./Events');
const Participants = require('./Participants');
const Scores = require('./Scores');
const Auth = require('./Auth');

async function extractResult(dataExtractor) {
  let result = null;

  try {
    const data = await dataExtractor();

    result = {
      success: true,
      data,
    };
  } catch (error) {
    result = {
      success: false,
      error: error.message || error,
    };
  }

  return result;
}

let postgresPromiseInstance;

const pgInitOptions = {
  extend(db) {
    const dbInstance = db;
    dbInstance.events = new Events(dbInstance, postgresPromiseInstance);
    dbInstance.participants = new Participants(dbInstance, postgresPromiseInstance);
    dbInstance.scores = new Scores(dbInstance, postgresPromiseInstance);
    dbInstance.auth = new Auth(dbInstance, postgresPromiseInstance);
  },
};

postgresPromiseInstance = pgPromise(pgInitOptions);
const dbInstance = postgresPromiseInstance(config.get('postgres.uri'));

module.exports = { dbInstance, postgresPromiseInstance, extractResult };
