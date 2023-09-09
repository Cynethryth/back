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

app.post("/invitacionesUser", async (req, res) => {
  const data = req.body.data;
  try {
    console.log("trigger")
    db.query(
      `SELECT *
      FROM invitaciones
      WHERE usuarioId IN (SELECT id FROM users where username = '${data}');`,
      (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
      }
    );
  } catch {}
});

app.get("/getOne/:id", async (req, res) => {
  const {id} = req.params;
  try {
    console.log(id)
    db.query(
      `SELECT *
      FROM invitaciones
      WHERE id = '${id}'`,
      (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
        console.log(rows)
      }
    );

  } catch {}
});

app.get("/deleteOne/:id", async (req, res) => {
  const {id} = req.params;
  try {
    console.log(id)
    db.query(
      `delete from invitaciones where id = '${id}'`,
      (err, rows, fields) => {
        if (err) throw err;
        res.send(true);
      }
    );

  } catch {}
});

app.post("/regist", async (req, res) => {
  const {data, user} = req.body;
  try {
    console.log(data,user)
    
    const post = v4()
    db.query(
      `insert into invitaciones values('${post}','${data.Departamento}','${user}','${data.Nombre}','${data.Ciudad}','${data.Direccion}');`,
      (err, rows, fields) => {
        if (err) throw err;
        res.send(post);
      }
    );
    // res.send('hola')
  } catch {}
});

app.post("/edit", async (req, res) => {
  const {data} = req.body;
  try {
    console.log(data)
    db.query(
      `update invitaciones 
      set nombreInvitado = '${data.nombreInvitado}',  date = '${data.date}', 
      expiration = '${data.expiration}', idDepartamento='${data.idDepartamento}'
      where id = '${data.id}'`,
      (err, rows, fields) => {
        if (err) throw err;
        res.send(true);
      }
    );
    // res.send('hola')
  } catch {}
});


module.exports = app;
