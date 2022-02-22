import { Op } from "sequelize";
import { sequelize } from "../../../config/database";
import Team from "../../team/model/team";
import Player from "../model/player";

export const getScorer =async () => {
    const scorer= await Player.findOne({
        raw: true,
        include: {
            model: Team,
            attributes: ['team_name']
          },
          where:{
            goals: {
              [Op.in]:[
              sequelize.literal('select MAX(goals) from players')]}
          },
          attributes: ['player_name', 'goals']
    });
    return scorer;  
}