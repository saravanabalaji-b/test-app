const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Cloud – Native DevOps Tools and Best Practices - Demo");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});