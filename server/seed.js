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
        drop table if exists links;
        drop table if exists classes;

        CREATE TABLE holidays(
            id SERIAL PRIMARY KEY,
            dates date,
            times timestamp,
            title varchar(225)
        );

        CREATE TABLE schedule(
            id integer,
            description varchar(225),
            times timestamp
        );
        

        CREATE TABLE goals(
            id integer,
            description varchar(225),
            dates date,
            times timestamp,
            time_limit timestamp,
            checked_off boolean,
            not_checked_off boolean,
            in_progress boolean
        );
        
        CREATE TABLE links(
          id integer,
          name varchar(225),
          link varchar(225)
        );

        CREATE TABLE classes(
          id integer,
          name varchar(225),
          teacher varchar(225),
          room integer
        );
        
        INSERT INTO links(name, link)
        VALUES('Youtube', 'https://www.youtube.com/'),
        ('Wikipedia', 'https://en.wikipedia.org/wiki/Main_Page'),
        ('Google', 'https://www.google.com/'),
        ('Discord', 'https://discord.com/channels/@me');
       
        INSERT INTO classes(name, teacher, room)
        VALUES ('Math', 'Mr. Jonas', 200),
        ('Language Arts', 'Ms. Anderson', 405),
        ('Science', 'Bill Nye', 159),
        ('Gettin Schooled', 'Stephen Hawking', 001),
        ('Gym', 'Michael Jordan', 023),
        ('Buisness', 'Elon Musk', 282),
        ('Coding', 'Shigeru Miyamoto', 040),
        ('Clubs', 'Moon Knight', 000),
        ('Track', 'Road Runner', 100),
        ('Hand to hand combat', 'Will Smith', 357);




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
