let chai = require("chai");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("./server.js");

it("GET / ce dohvatiti sve knjige", function (done) {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200); //odgovor treba imati status 200
        res.body.should.be.a("array"); //u odgovoru treba biti neki niz
        res.body.length.should.be.eql(1); //duzina odgovora treba biti 1
        done();
      });
  });

  describe("testiranje POST na /", function () {
    it("POST / ce dodati novu knjigu", function (done) {
      let knjiga = {
        naslov: "From Mathematics to Generic Programming",
        cijena: 42,
        tip: "eKnjiga",
        ocjena: 4.15,
      };
      chai
        .request(server)
        .post("/")
        .set("content-type", "application/x-www-form-urlencoded")
        .send(knjiga)
        .end(function (err, res) {
          res.should.have.status(200); //odgovor treba imati status 200
          should.not.exist(err); //ne bi trebalo biti gresaka
          done();
        });
    });
  });




