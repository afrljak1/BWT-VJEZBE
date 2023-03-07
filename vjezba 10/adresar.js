//KREIRANJE TABELE ADRESAR

const Sequelize = require("sequelize");
const sequelize = require("./baza.js");
const imenik = require("./imenik.js");
const Sequelize = require("./imenik.js")(sequelize);

module.exports = function (sequelize, DataTypes){
    const Adresar = sequelize.define('Adresar', {
        idKontakta: {
            type: DataTypes.INTEGER,
            refereces:{
                model:imenik,
                key:'id'
            }
        },
        idPoznanik: {
            type:DataTypes.INTEGER,
            rederences: {
                model:imenik,
                key:'id'

            }
        }
    });
    return Adresar;
}