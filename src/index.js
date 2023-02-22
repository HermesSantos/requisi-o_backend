const express = require('express')
const connection = require('./data/databaseConnection')

const app = express()

app.use(express.json())
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', "true");
  next();
});

app.listen(3000, ()=>console.log("servidor na porta 3000"))

app.post("/api/teste", async (req,res)=>{
 const {choice, input} = req.body
 connection.query(`select * from dados.dados where ${choice} like "%${input}%"`,(err, rows, fields)=>{
  return res.send(rows)
 })
})