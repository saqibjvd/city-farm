const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ AllowedHeaders: ["Content-Type", "Authorization"] }));
dotenv.config();

const { Pool } = require("pg");
const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", function(req, res) {
  res.send("<h1>Welcome to City Farm</h1>")
})

app.get("/sessions", function (req, res) {
  db.query("SELECT * FROM sessions")
    .then((result) => {
      res.status(200).json({ sessions: result.rows });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "failed to fetch sessions" });
    });
});

app.listen(3000, function () {
  console.log(`Server is listening on ${port}. Ready to accept requests!`);
});
