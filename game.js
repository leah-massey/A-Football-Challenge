const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//* 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
//G Solved using looping of the entire 'game' object

const scoringPlayers = Object.entries(game.scored);

for (const [key, value] of scoringPlayers) {
  console.log(`Goal ${Number(key) + 1}: ${value}`);
}

//* 2. Use a loop to calculate the average odd and log it to the console
//G solved using looping of the object values

const odds = Object.values(game.odds);
//console.log(odds);
//(3) [1.33, 3.25, 6.5]

let sumTotalOdds = 0;

for (const odd of odds) {
  sumTotalOdds += odd;
}
console.log(sumTotalOdds);
//11.08

const averageOdds = sumTotalOdds / odds.length;
console.log(averageOdds);
//=> 3.6933333333333334

//* Print the 3 odds to the console, but in a nice formatted way, exactly like this:

//* Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
//* Odd of victory Borrussia Dortmund: 6.5
//* .Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

const team1 = game.team1;
const team2 = game.team2;

console.log(
  `Odd of victory ${team1}: ${odds[0]}, Odd of draw: ${odds[1]}, Odd of victory ${team2}: ${odds[2]}`
);


}
