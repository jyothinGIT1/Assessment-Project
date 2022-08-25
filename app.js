require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connectDB");
const indexRoute = require("./routes");
const { errorHandler } = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(indexRoute);
app.use(errorHandler);

const port = process.env.PORT || 3000;

connectDB(process.env.MONGO_URL)
  .then(() => {
    console.log("database conncted");
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  })
  .catch((err) => {
    console.error("database error", err);
  });
