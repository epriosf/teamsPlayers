import { sequelize } from "../../../config/database";
import Player from "../../player/model/player";

const Sequelize = require('sequelize');

const Team = sequelize.define('teams', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    team_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    points: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  Team.hasMany(Player, {foreignKey: 'teamId', sourceKey: 'id'});
  Player.belongsTo(Team, {foreignKey: 'teamId', targetKey: 'id'})
  export default Team;