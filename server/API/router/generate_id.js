// Import the pool object from the db module
const pool = require("../db/db");

//generate employee_role UniqueID
const generateUniqueID = async (fontId,column,dataTable) => {
    let id;
    let isUnique = false;
    while (!isUnique) {
      id = fontId + Math.floor(Math.random() * 100 + 1).toString().padStart(2, "0");
      const checkQuery = `SELECT ${column} FROM ${dataTable} WHERE ${column} = $1`;
      const { rows } = await pool.query(checkQuery, [id]);
      if (rows.length === 0) {
        isUnique = true;
      }
    }
    return id;
  };

module.exports = generateUniqueID;
  