'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team_name: {
        type: Sequelize.STRING
      },
      points: {
        type: Sequelize.INTEGER
      },
    });
    await queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      player_name: {
        type: Sequelize.STRING
      },
      goals: {
        type: Sequelize.INTEGER
      },
      teamId:{
        type: Sequelize.INTEGER,
        allowNull: false, 
        references:{
          model: "teams",
          key: "id"
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};