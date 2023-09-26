const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const db = new Pool({
//   user: process.env.user,
//   host: process.env.host,
//   database: process.env.database,
//   password: process.env.password,
//   port: process.env.port,
//   ssl: true
// });

const { Pool } = require("pg");
const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get("/sessions", function (req, res) {
  db.query("SELECT * FROM sessions")
    .then((result) => {
      res.status(200).json({ sessions: result.rows });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/volunteers", function (req, res) {
  db.query("SELECT * FROM volunteers")
    .then((result) => {
      res.status(200).json({ sessions: result.rows });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, function () {
  console.log(`Server is listening on ${port}. Ready to accept requests!`);
});
