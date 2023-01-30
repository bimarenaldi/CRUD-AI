// queries.js
const connection = require('./env/db');

const getAll = (tableName) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${tableName}`, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const insert = (tableName, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${tableName} SET ?`, data, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const update = (tableName, data, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${tableName} SET ? WHERE id = ?`, [data, id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const remove = (tableName, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAll,
  insert,
  update,
  remove,
};
