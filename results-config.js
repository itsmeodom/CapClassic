// results-config.js
// Edit only this file during the tournament.
// Keep team names EXACTLY: "Ballaz", "Shot Callaz", "Impalaz"

window.RESULTS = {
  day1: {
    title: "Day 1 — Apple Mountain (Paired scramble)",
    leaderboard: [
      { place: 1, pairName: "Team 1", points: 4, team: "Ballaz", players: "Adam / Drew" },
      { place: 2, pairName: "Team 2", points: 3, team: "Shot Callaz", players: "Cameron / Ford" },
      { place: 3, pairName: "Team 3", points: 2, team: "Impalaz", players: "Joe / Zion" },
      { place: 4, pairName: "Team 4", points: 1, team: "Ballaz", players: "Sean / Mitch" },
      { place: 5, pairName: "Team 5", points: 0, team: "Impalaz", players: "Eric / Jared" },
      { place: 6, pairName: "Team 6", points: 0, team: "Shot Callaz", players: "Rane / Dan" },
    ],
  },

  day2: {
    title: "Day 2 — The Ridge (Paired best ball)",
    pointsPerWin: 3,
    matchups: [
      {
        label: "G1",
        teamA: { players: ["Adam", "Drew"], team: "Ballaz" },
        teamB: { players: ["Joe", "Zion"], team: "Impalaz" },
        winnerTeam: "Ballaz",
        score: "104-100",
        playerScores: [
          { name: "Adam", team: "Ballaz", gross: 92, net: 72 },
          { name: "Drew", team: "Ballaz", gross: 88, net: 70 },
          { name: "Joe", team: "Impalaz", gross: 86, net: 69 },
          { name: "Zion", team: "Impalaz", gross: 90, net: 71 },
        ],
      },
      {
        label: "G2",
        teamA: { players: ["Cameron", "Ford"], team: "Shot Callaz" },
        teamB: { players: ["Sean", "Mitch"], team: "Ballaz" },
        winnerTeam: "____",
        score: "____",
        playerScores: [
          { name: "Cameron", team: "Shot Callaz", gross: "__", net: "__" },
          { name: "Ford", team: "Shot Callaz", gross: "__", net: "__" },
          { name: "Sean", team: "Ballaz", gross: "__", net: "__" },
          { name: "Mitch", team: "Ballaz", gross: "__", net: "__" },
        ],
      },
      {
        label: "G3",
        teamA: { players: ["Eric", "Jared"], team: "Impalaz" },
        teamB: { players: ["Rane", "Dan"], team: "Shot Callaz" },
        winnerTeam: "____",
        score: "____",
        playerScores: [
          { name: "Eric", team: "Impalaz", gross: "__", net: "__" },
          { name: "Jared", team: "Impalaz", gross: "__", net: "__" },
          { name: "Rane", team: "Shot Callaz", gross: "__", net: "__" },
          { name: "Dan", team: "Shot Callaz", gross: "__", net: "__" },
        ],
      },
    ],
    bestNet: {
      name: "Dan",
      team: "Shot Callaz",
      net: "__",
      points: 1,
    },
  },

  day3: {
    title: "Day 3 — Ancil Hoffman (Individual match play)",
    matchups: [
      {
        label: "G1-A",
        p1: { name: "Cameron", team: "Shot Callaz", gross: "__", net: "__" },
        p2: { name: "Mitch", team: "Ballaz", gross: "__", net: "__" },
        winnerTeam: "Ballaz",
        points: "3",
      },
      {
        label: "G1-B",
        p1: { name: "Joe", team: "Impalaz", gross: "__", net: "__" },
        p2: { name: "Drew", team: "Ballaz", gross: "__", net: "__" },
        winnerTeam: "____",
        points: "__",
      },
      {
        label: "G2-A",
        p1: { name: "Adam", team: "Ballaz", gross: "__", net: "__" },
        p2: { name: "Dan", team: "Shot Callaz", gross: "__", net: "__" },
        winnerTeam: "____",
        points: "__",
      },
      {
        label: "G2-B",
        p1: { name: "Ford", team: "Shot Callaz", gross: "__", net: "__" },
        p2: { name: "Eric", team: "Impalaz", gross: "__", net: "__" },
        winnerTeam: "____",
        points: "__",
      },
      {
        label: "G3-A",
        p1: { name: "Zion", team: "Impalaz", gross: "__", net: "__" },
        p2: { name: "Sean", team: "Ballaz", gross: "__", net: "__" },
        winnerTeam: "____",
        points: "__",
      },
      {
        label: "G3-B",
        p1: { name: "Rane", team: "Shot Callaz", gross: "__", net: "__" },
        p2: { name: "Jared", team: "Impalaz", gross: "__", net: "__" },
        winnerTeam: "____",
        points: "__",
      },
    ],

    // New: Day 3 best net score (+1 by default)
    bestNet: {
      name: "Rane",
      team: "Shot Callaz",
      net: "__",
      points: 1,
    },

    // New: Best combined net (Day 2 + Day 3) bonus (set points as desired)
    bestCombined: {
      name: "Rane",
      team: "Shot Callaz",
      net: "__",     // combined net
      points: 2,     // set this to whatever your rules are
    },
  },
};
