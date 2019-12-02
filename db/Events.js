const sql = require('./sql').events;

class Events {
  constructor(dbInstance, postgresPromiseInstance) {
    this.dbInstance = dbInstance;
    this.postgresPromiseInstance = postgresPromiseInstance;
  }

  /*
    Extracting user events list
  */
  async getFeatured(userId) {
    return this.dbInstance.any(sql.SelectFeatured, {
      userId: parseInt(userId, 10),
    });
  }

  /*
    Inserting event to featured list
  */
  async addFeatured(userId, eventId) {
    return this.dbInstance.none(sql.InsertFeatured, {
      userId: parseInt(userId, 10),
      eventId: parseInt(eventId, 10),
    });
  }

  /*
    Extracting event info
  */
  async getEvent(eventId) {
    return this.dbInstance.oneOrNone(sql.SelectEvent, {
      eventId: parseInt(eventId, 10),
    });
  }
}

module.exports = Events;
