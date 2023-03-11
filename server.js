const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// configure dotenv, to allow process.env access to the keys & values defined in the .env file
dotenv.config();

const db = require("./app/models");

const app = express();

var corsOptions = {
  origin: "http://localhost:8082"
};


// .connect(process.env.MONGODB_URL) works here 
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Cannot connect to the database !", err);
    process.exit();
  });



app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to blog back end application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});