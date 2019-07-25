const { Pool } = require('pg');

const { user, host, database, password, db_port } = require('../config/config');

const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: db_port
}); 

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});

function query(...args) {
  return new Promise((resolve, reject) => {
    pool.connect((err, client, done) => {
      if (err) throw err;
      client.query(args[0], (err, res) => {
        done();

        if (err) {
          reject(err);
        } else {
          resolve(res.rows);
        }
      })
    })
  })
}

module.exports = {
  query: query,
  pool: pool
}