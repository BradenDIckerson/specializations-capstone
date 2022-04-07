require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));







const port = process.env.PORT || process.env.SERVER_PORT;
app.listen(port, () => console.log(`Server is running on ${port}`));