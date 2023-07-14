require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = 8000;

require("./db/connect");
const router = require("./Routes/Router");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`server start at port no : ${port}`);
});
