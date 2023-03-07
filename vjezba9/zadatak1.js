const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { dirname } = require('path');

const app = express();

let connection = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "",
    database: "bwt"
});
  
connection.connect((err)=>{
    if(err)throw err;
    console.log("Konekcija je uspostavljena");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//ZADATAK2 - GET ZAHTJEV
app.get("/imenik", (req, res) => {
    connection.query('SELECT * FROM imenik', (err, result) => {
        if(err)throw err;
        res.json(result);
    })
});


//ZADATAK3 - UNOS PODATAKA U TABELU IMENIK

app.get('/unos', (req, res) =>{
    res.sendFile(path.join(__dirname, 'forma.html'));
});

app.post('/imenik/create', (req, res) => {
    const body = req.body;
    const values = {
        ime_i_prezime: '${body.ime} ${body.prezime}', 
        adresa: body.adresa,
        broj_telefona: body.broj_telefona
    };


    connection.query('INSERT INTO imenik SET ?', values, (err, result) => {
        if(err)throw err;
        res.json(results.insertId);
    })
});


//ZADATAK5

app.get('/poznanik/:kontakt', (req, res) => {
    connection.query('SELECT a.ime_i_prezime, a.adresa, a.broj_telefona' + 
    'FROM imenik a  INNER JOIN adresar b on a.id = b.idPoznanik' +
    'WHERE b.idKontakta = ? ', req.params.kontakt, (err1, results1) => {
        if(err1) throw err1;
        res.json(results1);

    });
});
app.listen(3000);