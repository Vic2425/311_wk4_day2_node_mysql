require('dotenv').config();
const mysql = require('mysql');

const host = process.env.HOST;
const userName = process.env.UNAME;
const pasword = process.env.PASSWORD;
const database = process.env.DB;


class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: host,
        user: userName,
        password: pasword,
        database: database
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;