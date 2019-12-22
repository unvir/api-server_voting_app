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

  /*
    Extracting user
  */
  async quickLogin(quickPassword, eventId) {
    const result = await this.dbInstance.oneOrNone(sql.SelectUserByQuickPasswordAndEvent, {
      quickPassword,
      eventId,
    });

    if (!result) {
      throw new Error('Invalid credentials');
    }
    return result;
  }

  /*
    Create user
  */
  async createUser(login, password, fullName, quickPassword) {
    const result = await this.dbInstance.one(sql.InsertUser, {
      login,
      password,
      fullName,
      quickPassword,
    });

    if (!result) {
      throw new Error('Cannot create user');
    }
    return result;
  }
}

module.exports = Auth;
