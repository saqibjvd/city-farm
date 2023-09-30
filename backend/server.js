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

app.get("/sessions", async (req, res) => {
  
    try {
      const result =  await db.query("SELECT * FROM sessions")
     
      res.status(200).json({ sessions: result.rows });
    } 
    catch(error){
      console.log(error);
      res.status(500).json({ error: "failed to fetch sessions" });
    }
});


app.put('/sessions/:id', async (req, res) => {
  try {
    const { id } = Number(req.params);
    
    const updateQuery =
      "UPDATE sessions SET booked = true WHERE id = $1";
    await db.query(updateQuery, [id]);
    res.status(200).json({ success: true, message: "booking confirmed" });
  } 
  catch (error) {
    console.log(error);
    res.status(500).json({ error: "something went wrong" });
  }
})



app.listen(3000, function () {
  console.log(`Server is listening on ${port}. Ready to accept requests!`);
});


// coloumn booked -- each time cliked button you should be able to show booking status(true/false) get that responsse back and show "session booked" next to button
