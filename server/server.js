const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { seed } = require("./seed");
const { getGoals } = require("./controller");
const { getLinks } = require("./controller");
const { getClasses } = require("./controller");



app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/api/seed", seed);

app.get("/api/goals", getGoals);

app.get("/api/links", getLinks);

app.get("/api/classes", getClasses);

const port = process.env.PORT || process.env.SERVER_PORT;
app.listen(port, () => console.log(`Server is running on ${port}`));
