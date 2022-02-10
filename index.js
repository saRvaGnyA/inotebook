const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
connectToMongo();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
