const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer(function(req,res){
if(req.method=='POST'){
let tijeloZahtjeva = '';
req.on('data',function(data){
tijeloZahtjeva+=data;
});
req.on('end',function(){
//primljen čitav zahtjev
let parametri = new url.URLSearchParams(tijeloZahtjeva);
let novaLinija = parametri.get('ime')+","+parametri.get('prezime')+
","+parametri.get('adresa')+","+parametri.get('broj_telefona');
fs.appendFile('imenik.txt',novaLinija,function(err){
if(err) throw err;
console.log("Novi red uspješno dodan!");
res.writeHead(200,{});
res.end(parametri.toString());
});
});
}
}).listen(8080);
