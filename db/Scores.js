const sql = require('./sql').scores;

class Scores {
  constructor(dbInstance, postgresPromiseInstance) {
    this.dbInstance = dbInstance;
    this.postgresPromiseInstance = postgresPromiseInstance;
  }

  /*
    Extracting participants scores
  */
  async getScoredParticipants(eventId) {
    return this.dbInstance.any(sql.SelectScoredParticipants, {
      eventId: parseInt(eventId, 10),
    });
  }
}

module.exports = Scores;
