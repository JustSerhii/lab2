const sequelize = require('../config/db.js');
const { Sequelize, DataTypes } = require('sequelize');

const Album = sequelize.define('Album', {
  // Model attributes are defined here
  albumTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true