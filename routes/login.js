const express = require("express");
const app = express.Router();
const db = require("../db.config");
const { v4 } = require("uuid");
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", (req, res) => {
  async function executer() {
    const data = req.body.data;
    try {
      const hashed = await bcrypt.hash(data.Password, 10);
      db.query(
        `SELECT * FROM users WHERE email = '${data.Email}'`,
        (err, rows, fields) => {
          if (rows.length == 0) {
            res.sendStatus(400);
          } else {
            const user = rows[0];
            console.log(hashed)
            if (user.password == data.Password) {
              const usuario = {
                id:user.id,
                name:user.nombre,
                surname: user.apellidos,
                username: user.username,
                email:user.email
              }
              console.log(usuario);
              res.send(usuario);
            }
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  executer();
});

app.post("/register", async (req, res) => {
  const { Name, Surname, Email, Password, Username } = req.body.data;
  try {
    const hashed = await bcrypt.hash(Password, 10);
    db.query(
      `INSERT INTO users VALUES('${v4()}','${Name}', 
      '${Surname}','${Username}',
      '${Email}','${Password}',0,curdate())`,
      (err, rows, fields) => {
        if (err) throw err;
        res.send("created");
      }
    );
  } catch {}
});

module.exports = app;
