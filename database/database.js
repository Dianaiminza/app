var sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/ecommerce.db', (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    } 
  });
  module.exports={db}