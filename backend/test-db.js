const pool = require("./src/config/db");

pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database Connected");
    console.log(result.rows);
  }

  pool.end();
});