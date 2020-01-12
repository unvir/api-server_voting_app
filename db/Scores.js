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

  /*
    Extracting participants scores from judge
  */
  async getScoredParticipantsFromJudge(eventId, judgeId) {
    return this.dbInstance.any(sql.SelectScoredParticipantsFromJudge, {
      eventId: parseInt(eventId, 10),
      judgeId: parseInt(judgeId, 10),
    });
  }

  /*
    Put participant score
  */
  async putScore(eventId, participantId, userId, score) {
    return this.dbInstance.any(sql.InsertScore, {
      eventId,
      participantId,
      userId,
      score,
    });
  }
}

module.exports = Scores;
