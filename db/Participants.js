const sql = require('./sql').participants;

class Participants {
  constructor(dbInstance, postgresPromiseInstance) {
    this.dbInstance = dbInstance;
    this.postgresPromiseInstance = postgresPromiseInstance;
  }

  /*
    Extracting event participants
  */
  async getParticipants(eventId) {
    return this.dbInstance.any(sql.SelectParticipants, {
      eventId: parseInt(eventId, 10),
    });
  }
}

module.exports = Participants;
