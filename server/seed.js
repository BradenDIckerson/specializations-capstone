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
  seed: (req, res) => {
    sequelize
      .query(
        `

        drop table if exists holidays;
        drop table if exists schedule;
        drop table if exists graphs;
        drop table if exists goals;

        CREATE TABLE holidays(
            id SERIAL PRIMARY KEY,
            date date(255),
            time time(255),
            title varchar(225)
        );

        CREATE TABLE schedule(
            id integer(225),
            description varchar(225),
            time time(255)
        );
        

        CREATE TABLE goals(
            id integer(255),
            description varchar(225),
            date date(225),
            time time(225),
            time_limit timestamp(225),
            checked_off boolean,
            not_checked_off boolean,
            in_progress boolean
        );
        
        
        
        INSERT INTO goals()
        // viewing goals
        // adding goals 
        //
        `
      )
          // graph for in progress 

      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};
