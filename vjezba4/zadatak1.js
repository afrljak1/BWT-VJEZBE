var http = require('http');
var fs = require("fs");
var data = fs.readFile('users.csv');
var o2x = require('object-to-xml');
var iconvlite = require('iconv-lite');
import { readFile } from 'node:fs';


function readFileSync_encoding(format, encoding) {
    var content = fs.readFileSync(filename);
    return iconvlite.decode(content, encoding);
}

function provjeripassword(sifra1, sifra2){
    var s1=fs.read(sifra1);
    var s2=fs.read(sifra2);
    
   return String.fromCharCode((sifra1.charatcode(0)%16)+55);
}

 
http.createServer(function (req, res) {

        if(req.method=='POST'){
            let tijeloZahtjeva = '';
            var objekat=new Object();
            var niz=new Array();

            req.on('data',function(data){
                readFile('/users.csv/', 'x-www-form-urlencoded', (err, data) => {
                    if (err) {
                        throw err;
                    console.log(err);
                    }

var temp=data.split("\n");

for(var i=0; i<temp.length(); i++){
    var c=i.split(",");
    for(var j=0; j<c.length(); j++){
        var n=c[j].split(":");

        if(j==0) {
            objekat.username=n[1];
        }

        if(j==1){
            objekat.password=n[1];
        }
        if(j==2){
            objekat.neme=n[1];
        }
        if(j==3){
            objekat.surname=n[1];
        }
        if(j==4){
            objekat.role=n[1];
        }

    }
}

    niz.push(objekat);



                  });
            });
     

    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Putanja zahtjeva: '+req.url+'</h1>');
    res.end('<b>Metoda:'+req.method+'</b>')




}).listen(8080);

