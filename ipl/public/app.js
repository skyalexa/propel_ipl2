function showData() {
    const season = document.getElementById("year").value;
    //console.log(season);
      fetch("/e?season="+season)
        .then(r => r.json())
        .then(response=> {visualizeExtraRunsConcededByYear(response, season)
          function visualizeExtraRunsConcededByYear(extraRunsPerYear, season){
          //  console.log(extraRunsPerYear);
            const seriesData = [];
            for (let year in extraRunsPerYear) {
              seriesData.push([year, extraRunsPerYear[year]]);
            }
            console.log(seriesData);
            Highcharts.chart("show-data", {
              chart: {
                type: "column"
              },
              title: {
                text: "Extra Runs Conceded By Each Team in "+season
              },
              subtitle: {
                text:
                  'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
              },
              xAxis: {
                type: "category"
              },
              yAxis: {
                min: 0,
                title: {
                  text: "Extra Runs"
                }
              },
              series: [
                {
                  name: "Teams",
                  data: seriesData
                }
              ]
            });
          }
          
        
        });
    
  
  
  
  
  } 
  
  
  
  function fetchAndVisualizeData() {
      fetch("./data.json")
        .then(r => r.json())
        .then(visualizeData);
    }
    
    fetchAndVisualizeData();
    
    function visualizeData(data) {
      visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
      return;
    }
    
    function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
      const seriesData = [];
      for (let year in matchesPlayedPerYear) {
        seriesData.push([year, matchesPlayedPerYear[year]]);
      }
      console.log(seriesData);
      Highcharts.chart("matches-played-per-year", {
        chart: {
          type: "column"
        },
        title: {
          text: "Matches Played Per Year"
        },
        subtitle: {
          text:
            'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
        },
        xAxis: {
          type: "category"
        },
        yAxis: {
          min: 0,
          title: {
            text: "Matches"
          }
        },
        series: [
          {
            name: "Years",
            data: seriesData
          }
        ]
      });
    }
    
  
   
    function fetchAndVisualizeData2() {
      fetch("./data2.json")
        .then(r => r.json())
        .then(visualizeData2);
    }
    
    fetchAndVisualizeData2();
    
    function visualizeData2(data2) {
      visualizeMatchesWonByTeam(data2.matchesWonByTeam);
      return;
    }
    
    function visualizeMatchesWonByTeam(matchesWonByTeam) {
      let years = Object.keys(matchesWonByTeam);
      var teams = Object.keys(matchesWonByTeam[years[0]]);
  
      let seriesData = [];
    
      for (team in teams) {
        data = {
          name : teams[team],
          data : []
        }
        for (let year in years) {
          if (matchesWonByTeam[years[year]] && matchesWonByTeam[years[year]][teams[team]]){
            data.data.push(matchesWonByTeam[years[year]][teams[team]]);
          }
          else {
            data.data.push(0);
          }
        }
        seriesData.push(data);
      }
      console.log(seriesData);
     
      Highcharts.chart("teams-won-per-year", {
        chart: {
          type: "column"
        },
        title: {
          text: 'Matches won by each team over all the years'
        },
        subtitle: {
          text:
            'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
        },
        xAxis: {
          "categories": years
        },
        yAxis: {
          min: 0,
          title: {
            text: "Matches"
          },
          stackLabels: {
            enabled: true
          }
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true
            }
          }
        },
        series: seriesData
      });
    }
  
  
    function fetchAndVisualizeData3() {
      fetch("./data3.json")
        .then(r => r.json())
        .then(visualizeData3);
    }
    
    fetchAndVisualizeData3();
    
    function visualizeData3(data3) {
      visualizeTenEconomicalBowlers(data3.tenEconomicalBowlers);
      return;
    }
  
    function visualizeTenEconomicalBowlers(tenEconomicalBowlers) {
  
      let seriesData = [];
      for (let key in tenEconomicalBowlers) {
        seriesData.push([key, tenEconomicalBowlers[key].economuRate]);
      }
      seriesData = seriesData.slice(0,10);
      console.log(seriesData);
      Highcharts.chart("Top-Ten-Economic-Bowlers", {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 10 Economic Bowlers in 2015'
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Economy rate'
            }
        },
        legend: {
            enabled: false
        },
    
        series: [{
            name: 'Bowlers',
            data: seriesData,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
    } 
  
    function fetchAndVisualizeData4() {
      fetch("./data4.json")
        .then(r => r.json())
        .then(visualizeData4);
    }
    
    fetchAndVisualizeData4();
    
  function visualizeData4(data4) {
      visualizeExtraRunsConcededByEachTeam(data4.extraRunsConcededByEachTeam);
      return;
    }
  
    function visualizeExtraRunsConcededByEachTeam(extraRunsConcededByEachTeam) {
  
      let seriesData = [];
      for (let key in extraRunsConcededByEachTeam) {
        seriesData.push([key, extraRunsConcededByEachTeam[key]]);
      }
      console.log(seriesData);
      Highcharts.chart("extra-run-conceded-byteam", {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Runs conceded by each team, 2016'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
        series: [
          {
            name: "Teams",
            data: seriesData
          }
        ]
      });
  }
  
  
  function fetchAndVisualizeData5() {
    fetch("./data5.json")
      .then(r => r.json())
      .then(visualizeData5);
  }
  
  fetchAndVisualizeData5();
  
  function visualizeData5(data5) {
    visualizeMatchesPlayedInCityPerSeason(data5.matchesPlayedInCityPerYear);
    return;
  }
  
  function visualizeMatchesPlayedInCityPerSeason(matchesPlayedInCityPerYear) {
    console.log(matchesPlayedInCityPerYear);
    let years = Object.keys(matchesPlayedInCityPerYear);
    console.log(years);
    let seriesData = [];
    for(let year in matchesPlayedInCityPerYear){
      let temp = [];
      for(let city in matchesPlayedInCityPerYear[year]){
        temp.push([city, matchesPlayedInCityPerYear[year][city]]);
      }
      seriesData.push({name: year, data: temp});
    }
    console.log(seriesData);
    Highcharts.chart('matches played in city', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Matches played in city per year'
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        title: {
          text: "Years"
        },
        categories: years,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Total Matches'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: seriesData
  });
  }
  
  
  
  