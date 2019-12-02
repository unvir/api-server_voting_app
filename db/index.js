const pgPromise = require('pg-promise');
const config = require('config');
const Events = require('./Events');

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
  },
};

postgresPromiseInstance = pgPromise(pgInitOptions);
const dbInstance = postgresPromiseInstance(config.get('postgres.uri'));

module.exports = { dbInstance, postgresPromiseInstance, extractResult };
