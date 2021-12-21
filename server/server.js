const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const morgan = require("morgan");
const esm = require("esm");
require("dotenv").config();

const app = express();

// Database Connection
mongoose
   .connect(process.env.DATABASE, {
      useNewUrlParser: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
   })
   .then(() => {
      console.log("DB has been connected ===>");
   })
   .catch((err) => {
      console.log("Connection failed X", err.message);
   });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
   cors({
      origin: ["http://localhost:3000"],
   })
);

app.post("/api/register", (req, res) => {
   console.log("Register EndPoint", req.body);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
   console.log(`Server running on PORT ${PORT}`);
});

