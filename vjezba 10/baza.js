//KREIRANJE KONEKCIJE NA BAZU
const Sequelize = require("sequelize");

const sequelize = new Sequelize("vjezba10", "root", "", {
    host:"localhost",
    dialect:"mysql"
});

module.exports = sequelize;