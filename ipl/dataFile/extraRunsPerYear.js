function extraRunsPerYear(deliveries,matches,matchesPlayedPerYear){ 
    const season = Object.keys(matchesPlayedPerYear);
    const result = {}
    for(let year of season){
    const ids = matches.filter(obj =>obj['season'] === year).map(obj=>parseInt(obj.id))
    const dels = deliveries.filter(del=>ids.includes(parseInt(del['match_id'])))
    result[year]={}
       for(let id of ids){
        for(let del of dels){
            if(parseInt(del['match_id']) === id){
                
                if(result[year][del.bowling_team]){
                    result[year][del.bowling_team] += parseInt(del['extra_runs'])
                }else{
                    result[year][del.bowling_team] = parseInt(del['extra_runs'])
                }
            }
        }
    }
    }
        return result
}

module.exports = extraRunsPerYear