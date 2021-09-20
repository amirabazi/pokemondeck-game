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
app.use(bodyParser.json());

// CORD
app.use((req, res, next) =>  {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// REGISTER
app.post('/user/register', (req,res) => {

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const sqlInput = "INSERT INTO users (email, username, password) VALUES (?,?,?)";
    connection.query(sqlInput,[email,username, password], (error,result) => {
        console.log(result)
        if(result===undefined){
            res.send('korisnik vec postoji')
        }else{
            res.send();
        }
    })
    console.log(req);       
})

//LOGIN
app.post('/user/login', (req,res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    const sqlInput = "SELECT * FROM users WHERE username = ?" 
    connection.query(sqlInput,[username], (error,result) => {        
        if(result===undefined || result[0]===undefined){
            res.send('ne postoji korisnik');
        }
        else if(result[0].password !== password) {
            res.send('nije tacna sifra');            
        }else{
            res.send('uspjesna prijava');
        }        
    })     
})

app.listen(3001, ()=>{
    console.log('App listening on port 3001!');
})