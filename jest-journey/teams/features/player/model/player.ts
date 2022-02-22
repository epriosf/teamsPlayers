import { sequelize } from "../../../config/database";

const Sequelize = require('sequelize');
const Player = sequelize.define('players', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    player_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    goals: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    teamId:{
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {

    timestamps: false
  });
  export default Player;