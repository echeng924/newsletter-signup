const db = require('../config/db');
const sql = require('../config/sqlProvider').members;
const Member = require('../models/Member');

class MemberDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Member(row));
  }

  static create({ first_name, last_name, email, zipcode }) {
    return db.one(sql.create, [first_name, last_name, email, zipcode])
             .then((row) => new Member(row));
  }
}

module.exports = MemberDAO;
