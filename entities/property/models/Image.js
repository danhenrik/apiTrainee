const sequelize = require('../../../database');
const {DataTypes} = require('sequelize');
const {nanoid} = require('nanoid');

const Image = sequelize.define('Images', {
  id: {
    type: DataTypes.STRING(21),
    defaultValue: () => nanoid(),
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Image;
