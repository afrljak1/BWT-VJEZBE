let chai = require("chai");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);
let should = require("chai").should();

let server = require('./server');

describe('testiranje GET na /', function () {

    beforeEach(function (done) {
        fs = require('fs');
        fs.writeFile('./knjige.txt', 'Pro Git,33,meki uvez,4.16', function (){});
        done();
    });

    afterEach(function (done) {
        delete require.cache[require.resolve('fs')];
        done()
    });

    it('GET / ce dohvatiti sve knjige', function (done) {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200); //odgovor treba imati status 200
                res.body.should.be.a('array'); //u odgovoru treba biti neki niz
                res.body.length.should.be.eql(1); //duzina odgovora treba biti 1 
                done();
            });

        });
    });
    


    describe("Testiranje DELETE na /", function () { //testiranje DELETE
        beforeEach(function (done) {
          fs = require("fs");
          fs.writeFile("./knjige.txt", "Pro Git,33,meki uvez,4.16", function () {});
          done();
        });
      
        afterEach(function (done) {
          delete require.cache[require.resolve("fs")];
          done();
        });
      
        it("Vraca status 200 nakon DELETE", function (done) {
          chai.request(server)
            .delete("/")
            .end(function (err, res) {
              res.should.have.status(200);
              res.body.should.be.a('array'); //u odgovoru treba biti neki niz
              res.body.length.should.be.eql(0); //duzina odgovora treba biti 1 
              done();
            });

         });
     });
      

     
      describe("Testiranje PUT na /", function () { //testiranje PUT
        beforeEach(function (done) {
          fs = require("fs");
          fs.writeFile("./knjige.txt", "Pro Git,33,meki uvez,4.16", function () {});
          done();
        });
      
        afterEach(function (done) {
          delete require.cache[require.resolve("fs")];
          done();
        });
      
        it("Vraca status 200 nakon PUT", function (done) {
          chai.request(server)
            .put("/")
            .send({ naslov: "Naslov knjige: " })
            .end(function (err, res) {
              res.should.have.status(200);
              res.body.should.be.a('array'); //u odgovoru treba biti neki niz
              res.body.length.should.be.eql(1); //duzina odgovora treba biti 1 
              done();
            });
        });
      });
  