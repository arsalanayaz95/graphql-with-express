const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("This is running");
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
