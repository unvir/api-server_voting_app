const { QueryFile } = require('pg-promise');
const path = require('path');

function getQueryFile(file) {
  const fullPath = path.join(__dirname, file);
  const queryFile = new QueryFile(fullPath, { minify: true });

  if (queryFile.error) {
    throw queryFile.error;
  }

  return queryFile;
}

module.exports = {
  auth: {
    SelectUser: getQueryFile('auth/SelectUser.sql'),
    InsertUser: getQueryFile('auth/InsertUser.sql'),
    SelectUserByQuickPasswordAndEvent: getQueryFile('auth/SelectUserByQuickPasswordAndEvent.sql'),
  },
  events: {
    SelectFeatured: getQueryFile('events/SelectFeatured.sql'),
    SelectEvent: getQueryFile('events/SelectEvent.sql'),
    InsertFeatured: getQueryFile('events/InsertFeatured.sql'),
  },
  participants: {
    SelectParticipants: getQueryFile('participants/SelectParticipants.sql'),
    SelectParticipantsWithScores: getQueryFile('participants/SelectParticipantsWithScores.sql'),
  },
  scores: {
    SelectScoredParticipants: getQueryFile('scores/SelectScoredParticipants.sql'),
    InsertScore: getQueryFile('scores/InsertScore.sql'),
  },
};
