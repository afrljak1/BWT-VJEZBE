//KREIRANJE TABELE IMENIK
const Sequelize = require("sequelize");
const sequelize = require("./baza.js");
 
module.exports = function (sequelize, DataTypes) {
    const Imenik = sequelize.define('Imenik', {
       ime: Sequelize.STRING,
       prezime: Sequelize.STRING,
       adresa: Sequelize.STRING,
       brojTelefona: {
           type: Sequelize.STRING,
           validate: {
               is: {
                   args: [/[0-9]{3}\/[0-9]{3}\-[0-9]{3}/],
                   msg: "Nije pravilan format broja telefona"
               }
           }
       },
       datumDodavanja: Sequelize.DATE
      });
   return Imenik;
}

