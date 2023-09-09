var express = require("express");
var router = express.Router();
var cors = require("cors");
var app = express();
const db = require("./db.config");

//app options
app.options("*", cors());

//imports routes
const login = require("./routes/login");
const invitaciones = require("./routes/invitaciones");
const departamentos = require("./routes/departamentos");

//use functions
app.use(router);
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/login", login);
app.use("/invitaciones", invitaciones);
app.use("/departamentos", departamentos);

router.get("/", function (request, response) {
  response
    .status(200)
    .json({ mensaje: "Nuestra primera app con node.js utilizando express" });
});

app.get("/pig", async (req, res) => {
  try {
    db.connect();
    db.query("SELECT * FROM users", (err, rows, fields) => {
      if (err) throw err;
      res.send(rows);
    });

    db.end();
  } catch {}
});

app.listen(5000, function () {
  console.log("Servidor iniciado");
});
