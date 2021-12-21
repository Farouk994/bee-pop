const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");

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

// Auto load routes
readdirSync("./routes").map((r) => {
   app.use("/api", require(`./routes/${r}`));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
   console.log(`Server running on PORT ${PORT}`);
});
