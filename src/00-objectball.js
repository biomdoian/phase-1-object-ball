function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 1,
            blocks: 1,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 2,
            blocks: 2,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 1,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 14,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 12,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 1,
          },
          "DeSagna Diop": {
            number: 28,
            shoe: 14,
            points: 24,
            rebounds: 3,
            assists: 1,
            steals: 4,
            blocks: 5,
            slamDunks: 0,
          },
          "Ben Gordon": {
            number: 33,
            shoe: 15,
            points: 33,
            rebounds: 1,
            assists: 2,
            steals: 1,
            blocks: 5,
            slamDunks: 1,
          },
          "Brendan Haywood": {
            number: 3,
            shoe: 15,
            points: 6,
            rebounds: 2,
            assists: 2,
            steals: 2,
            blocks: 12,
            slamDunks: 2,
          },
        },
      },
    };
  }

  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }

  function numPointsScored(playerName) {
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return null;
  }
  
  function shoeSize(playerName) {
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return null;
  }
  
  function teamColors(teamName) {
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null;
  }
  
  function teamNames() {
    const teamNameArray = [];
    for (const team in game) {
      teamNameArray.push(game[team].teamName);
    }
    return teamNameArray;
  }
  
  function playerNumbers(teamName) {
      for (const team in game) {
          if (game[team].teamName === teamName) {
              const numbers = [];
              for (const player in game[team].players) {
                  numbers.push(game[team].players[player].number);
              }
              return numbers;
          }
      }
      return null;
  }
  
  function playerStats(playerName) {
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return null;
  }
  
/*let oo = { foo: 42, bar: 83, baz: 79 };
console.log("   Object.keys(oo) =>", Object.keys(oo));
console.log(" Object.values(oo) =>", Object.values(oo));
console.log("Object.entries(oo) =>", Object.entries(oo));
  //console.log(homeTeamName());*/
  console.log(gameObject());
 