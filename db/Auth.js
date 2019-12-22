const sql = require('./sql').auth;

class Auth {
  constructor(dbInstance, postgresPromiseInstance) {
    this.dbInstance = dbInstance;
    this.postgresPromiseInstance = postgresPromiseInstance;
  }

  /*
    Extracting user
  */
  async getUser(login, password) {
    const result = await this.dbInstance.oneOrNone(sql.SelectUser, {
      login,
      password,
    });

    if (!result) {
      throw new Error('Invalid login/password');
    }
    return result;
  }
}

module.exports = Auth;
