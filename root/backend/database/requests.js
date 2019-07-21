const { Pool } = require('pg');

const { user, host, database, password, db_port } = require('../config/config');

console.log(user, host, database, password, db_port);

const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port:db_port
});

pool.query('select now()', function (err, res) {
  console.log(res);
  pool.end();
})