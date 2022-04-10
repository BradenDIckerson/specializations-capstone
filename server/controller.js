require("dotenv").config();

const { CONNECTION_STRING } = process.env;

const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getGoals: (req, res) => {
    sequelize
      .query(`SELECT * FROM goals`)
      .then((dbres) => res.status(200).send(dbres[0]))
      .catch((err) => console.log(err));
  },

  getLinks: (req, res) => {
    sequelize
      .query(`SELECT * FROM links`)
      .then((dbres) => res.status(200).send(dbres[0]))
      .catch((err) => console.log(err));
  },

  getLinks: (req, res) => {
    sequelize
      .query(`SELECT * FROM links`)
      .then((dbres) => res.status(200).send(dbres[0]))
      .catch((err) => console.log(err));
  }


};
