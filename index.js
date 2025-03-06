require("./assets/require");

const app = express();

app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "akses.html"));
});

module.exports = app;