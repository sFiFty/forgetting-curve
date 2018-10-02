const express = require('express');
const http = require('http');
const path = require('path');
const mysql = require('mysql');
let app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test',
  database : 'forgetting-curve'
});

connection.connect()

connection.query('SELECT * from users', function (err, rows, fields) {
  console.log(rows)
})

connection.end()