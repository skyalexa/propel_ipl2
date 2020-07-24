function matchesPlayedInCityPerYear(matches) {
    const result = {};
    for (let match of matches) {
      const season = match.season;
      const city = match.city;
          if(!result[season]){
              result[season]={};
          }
          if(result[season][city]){
            result[season][city] += 1;
          }
          else{
            result[season][city] = 1;
          }
      }
    
    return result;
  }
  
  module.exports = matchesPlayedInCityPerYear;
  