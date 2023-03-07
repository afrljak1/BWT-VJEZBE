let expect = require('chai').expect;

let broj = 20;
let istina = true;
let rijec ='Proba';
let niz = ['Sarajevo', 'Tuzla', 'Mostar'];
let objekat = {
knjige:['Pro Git','From Mathematics to Generic Programming', 'Managing Data Using Excel ', 'The Elements of Style'],
   cijene:[11,33, 42, 45]
};


describe('Testiranje zadatak1 koristenjem expect', function(){

    it('postoji varijabla broj', function(){
        expect(broj).to.be.a('number');
    });

    it('varijabla broj ima vrijednost 20', function(){
        expect(broj).to.equal(20);
    });

    it('varijabla istina ima vrijednost true', function(){
        expect(istina).to.equal(true);
    });

    it('varijabla rijec je tipa string', function(){
        expect(rijec).to.be.a('string');
    });

    it('varijabla rijec ima dužinu 5', function(){
        expect(rijec).to.lengthOf(5);
    });

    it('varijabla niz nije prazna', function(){
        expect(niz).to.not.be.empty;
    });

    it('varijabla niz sadrži članove „Sarajevo“ i „Mostar“', function(){
        expect(niz).to.contain('Sarajevo', 'Mostar');
    });
 
    it('varijabla niz ima dužinu barem 4', function(){
        expect(niz).to.have.length.greaterThanOrEqual(3);
    })

    it('varijabla objekat u sebi sadrži niz knjige dužine 4', function(){
        expect(objekat).to.contain.property('knjige').with.lengthOf(4);
    });

});