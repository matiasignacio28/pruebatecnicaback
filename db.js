const promise = require('bluebird');
const options = {
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgresql://pruebatec:topoface00@localhost:5432/db_pruebatec';
const db = pgp(connectionString);

module.exports = db;
4