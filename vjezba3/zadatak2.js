const http = require('http');
const fs = require('fs');//fs paket
const url = require('url');
const file="./imenik.txt";

import { readFile } from 'node:fs';
import url from 'node:url';

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

        let p=req.url;
        const search=url.search;
        const q=search.get('q');
        const j=JSON.stringify(q);
        var pom_niz=[];
        for(var i in j){
            pom_niz.push(j[i]);
        }


for(let i=0; i<pom_niz.length(); i++){
    if(pom_niz.includes(q)){
        console.log(niz[0].ime+','+niz[1].prezime+','+niz[2].adresa+','+niz[3].brojtel);
    }
}

        fs.readFile('imenik.txt', (err,data)=>{
            const buffer=data.toString('utf-8');//potrebno konvertovatu buffer u string pozivom funkcije tostring ili neke druge srodne funkcije
            const red=buffer.split("\n");
            let niz=[];

           // const json=JSON.stringify()
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