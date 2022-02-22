import Team from "../model/team";
import { Op } from "sequelize";
import { sequelize } from "../../../config/database";

export const getTeams = async() => {
    const teams: any[] = await Team.findAll({
        raw: true
    });
    return teams.map((team)=>   {
        return {
            id: team.id,
            team_name: team.team_name,
            points: team.points
        }}
        );
}

export const getChampion = async() => {
    const winner = await Team.findOne({
        where:{
            points: {
              [Op.in]:[
              sequelize.literal('select MAX(points) from teams')]}
          },
        raw: true
    });
    return winner
}

// unir en un solo archivo los servicios
// la carpeta=> teams-service.ts
// principio kiss=> revisar


/* 
{
    return {
        la parte de los 2 return me mapea el objeto obtenido de la base de datos y me devuelve el objeto con los cambios
    }

}
*/