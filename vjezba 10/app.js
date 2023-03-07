const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const sequelize = require('./baza.js');
const express = require("express");
const app = express();
const Imenik = sequelize.import(__dirname+"/imenik.js");
Imenik.sync();
