'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('teams', [{
      id: 1,
      team_name: "Liverpool",
      points: 54
    },
    {
     id: 2,
     team_name: "Man City",
     points: 45
   },
   {
     id: 3,
     team_name: "Man United",
     points: 67
   },
   {
     id: 4,
     team_name: "Chelsea",
     points: 31
   },
   {
     id: 5,
     team_name: "Arsenal",
     points: 28
   } 
   ], {});
   await queryInterface.bulkInsert('players', [
    {
      id: 1,
      player_name: "LA",
      goals: 55,
      teamId: 1
    },
    {
      id: 2,
      player_name: "LB",
      goals: 51,
      teamId: 1
   },
   {
    id: 3,
    player_name: "LC",
    goals: 9,
    teamId: 1
   },
   {
    id: 4,
    player_name: "MCA",
    goals: 1,
    teamId: 2
   },
   {
    id: 5,
    player_name: "MCB",
    goals: 11,
    teamId: 2
   },
   {
    id: 6,
    player_name: "MCC",
    goals: 31,
    teamId: 2
  },
  {
    id: 7,
    player_name: "MUA",
    goals: 15,
    teamId: 3
  },
  {
    id: 8,
    player_name: "MUB",
    goals: 87,
    teamId: 3
  },
  {
    id: 9,
    player_name: "MUC",
    goals: 41,
    teamId: 3
  },
  {
    id: 10,
    player_name: "CA",
    goals: 31,
    teamId: 4
  },
  {
    id: 11,
    player_name: "CB",
    goals: 11,
    teamId: 4
  },
  {
    id: 12,
    player_name: "CC",
    goals: 31,
    teamId: 4
  },
  {
    id: 13,
    player_name: "AA",
    goals: 72,
    teamId: 5
  },
  {
    id: 14,
    player_name: "AB",
    goals: 49,
    teamId: 5
  },
  {
    id: 15,
    player_name: "AC",
    goals: 12,
    teamId: 5
  },

   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
