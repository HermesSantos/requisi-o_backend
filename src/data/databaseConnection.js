const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'dados'
})

connection.connect((err)=>{
  if(err) throw err
  console.log("Database Connected")
})
module.exports=connection