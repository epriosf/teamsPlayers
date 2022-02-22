import { getScorer } from "../services/player-service";

test('Get the player who has the most goals;', async()=>{
    //Setup
    // Execute
    const scorer= await getScorer();
    // Validation
    expect(scorer).toEqual(
        
        {player_name: 'MUB', goals: 87, 'team.team_name': 'Man United'}
    );
});
