const http = require('http');
const fs = require('fs');//fs paket
const url = require('url');

import { readFile } from 'node:fs';

//PRIMJER KORISTENJA FUNKCIJE READFILE IZ FS PAKETA
/*
import { readFile } from 'node:fs';

readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

http.createServer(function (req, res) {//kreiranje servera-kreiranje instance servera
    if(req.method=="Get"){
        fs.readFile('imenik.txt', (err,data)=>{
            const buffer=data.toString('utf-8');//potrebno konvertovatu buffer u string pozivom funkcije tostring ili neke druge srodne funkcije
            const red=buffer.split("\n");
            let niz=[];

            for(const r of red){
                const temp=r.split(',');
                //niz.push({
                    niz.push({
                        ime:temp[0].trim(),prezime:temp[1].trim(),adresa:temp[2].push(),brojtel:temp[3].push(),
                    });
              //  const ime=temp[0].trim();

               // }
            }
        });

    }
    res.writeHead(200, {'Content-Type': 'applicatio/json'});
    res.write('<h1>Putanja zahtjeva: '+req.url+'</h1>');
   // res.end('<b>Metoda:'+req.method+'</b>')
   res.end(JSON.stringify(niz));
    }).listen(8080);