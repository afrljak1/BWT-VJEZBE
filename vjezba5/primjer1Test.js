let korisnici = {imena: [ "Damir", "Edina", "Zerina" ] };
let provjera = "Irfan";

let assert = require('chai').assert;
let expect = require('chai').expect;
let should = require('chai').should();

describe("testiranje varijable provjera", ()=>{
    
it("provjera je tipa string", ()=>{
    assert.typeOf(provjera, 'string');
});

it('provjera ima vrijednost Irfan', function () {
    assert.equal(provjera, 'Irfan');
});

it('provjera ima dužinu 5', function () {
    assert.lengthOf(provjera, 5);
});

})

describe('testiranje varijable korisnici (assert)', function () {

    it('korisnici ima 3 imena', function () {
        assert.lengthOf(korisnici.imena, 3);
    });
});

describe('testiranje varijable provjera (expect)', function () {

    it('provjera je tipa string', function () {
        expect(provjera).to.be.a('string');
    });

    it('provjera ima vrijednost Irfan', function () {
        expect(provjera).to.eql('Irfan');
    });

    it('provjera ima dužinu 5', function () {
        expect(provjera).to.have.lengthOf(5);
    });
});

describe('testiranje varijable korisnici (expect)', function () {

    it('korisnici ima 3 imena', function () {
        expect(korisnici).to.have.property('imena').with.lengthOf(3);
    });
});

describe('testiranje varijable provjera (should)', function () {

    it('provjera je tipa string', function () {
        provjera.should.be.a('string');
    });

    it('provjera ima vrijednost Irfan', function () {
        provjera.should.eql('Irfan');
    });

    it('provjera ima dužinu 5', function () {
        provjera.should.have.lengthOf(5);
    });
});

describe('testiranje varijable korisnici (should)', function () {

    it('korisnici ima 3 imena', function () {
        korisnici.should.have.property('imena').with.lengthOf(3);
    });
});



