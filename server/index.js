const express = require('express');
const app = express();
const mysql  = require('mysql');
const bodyParser = require('body-parser')


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sqlpw",
    database: "pokemonapp",
    insecureAuth: true,
})

connection.connect();

app.use(bodyParser.urlencoded({extended: true}));

app.post('/user/register', (req,res) => {

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const sqlInput = "INSERT INTO users (email, username, password) VALUES (?,?, ?)";
    connection.query(sqlInput,[email,username, password], (error,result) => {
        console.log(result)
    })
    
})


app.listen(3001, ()=>{
    console.log('App listening on port 3001!');
})