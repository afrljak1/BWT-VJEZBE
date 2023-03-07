const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/',function(req,res){
   let tijelo = req.body;
   let novaLinija = "\n"+tijelo['ime']+","+tijelo['prezime']+
       ","+tijelo['adresa']+","+tijelo['broj_telefona'];
   fs.appendFile('imenik.txt',novaLinija,function(err){
       if(err) throw err;
       res.json({message:"Uspješno dodan red",data:novaLinija});
   });
});

app.get('/unos', function(req,res){
   

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
    <table>
          <tr>
                <td>Ime</td>
                <td>Prezime</td>
                <td>Adresa</td>
                <td>Broj telefona</td>
            </tr>
    </table>
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(table);
  generateTableHead(table, data);
  
  res.sendFile(path.join(__dirname+'forma.html'));
});

app.listen(8085);
