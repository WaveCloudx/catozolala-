const express = require("express");
const path = require("path");

const port = 3000

const app = express();

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "1.html"));
});

app.listen(process.env.PORT || port, () => {
  console.log('Server berjalan pada port http://localhost:' + (process.env.PORT || port));
});