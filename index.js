const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:1212@localhost:5432/MusicLibrary') // Example for postgres


const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }

main();