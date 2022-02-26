import { getChampion, getTeams } from "../services/team-service";


test('Get all the teams from the database;', async()=>{
    //Setup
    // Execute
    const teams= await getTeams();
    // Validation
    expect(teams).toEqual(
        [
            { id: 1, team_name: 'Liverpool', points: 54 },
            { id: 2, team_name: 'Man City', points: 45 },
            { id: 3, team_name: 'Man United', points: 67 },
            { id: 4, team_name: 'Chelsea', points: 31 },
            { id: 5, team_name: 'Arsenal', points: 28 }
          ]
    );
});
test('Get the Champion;', async()=>{
    //Setup
    // Execute
    const winner= await getChampion();
    // Validation
    expect(winner).toEqual(
        { id: 3, team_name: 'Man United', points: 67 }
    );
});