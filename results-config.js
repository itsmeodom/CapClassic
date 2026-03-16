// results-config.js
// Edit only this file during the tournament.
// Keep team names EXACTLY: "Ballaz", "Shot Callaz", "Impalaz"

window.RESULTS = {
  day1: {
    title: "Day 1 — Apple Mountain (Paired scramble)",
    leaderboard: [
      { place: 1, pairName: "Team 1", points: 4, team: "Impalaz", players: "Jared/Eric" },
      { place: 2, pairName: "Team 2", points: 2.5, team: "Ballaz", players: "Mitch/Sean" },
      { place: 3, pairName: "Team 2", points: 2.5, team: "Shot Callaz", players: "Ford/Cameron" },
      { place: 4, pairName: "Team 4", points: 1, team: "Impalaz", players: "Joe/Zion" },
      { place: 5, pairName: "Team 5", points: 0, team: "Shot Callaz", players: "Rane/Dan" },
      { place: 6, pairName: "Team 6", points: 0, team: "Ballaz", players: "Drew/Adam" },
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
        score: "3",
        playerScores: [
          { name: "Adam", team: "Ballaz", gross: "113", net: "70" },
          { name: "Drew", team: "Ballaz", gross: "117", net: "85"},
          { name: "Joe", team: "Impalaz", gross: "104", net: "75" },
          { name: "Zion", team: "Impalaz", gross: "115", net: "90" },
        ],
      },
      {
        label: "G2",
        teamA: { players: ["Cameron", "Ford"], team: "Shot Callaz" },
        teamB: { players: ["Sean", "Mitch"], team: "Ballaz" },
        winnerTeam: "Shot Callaz",
        score: "3",
        playerScores: [
          { name: "Cameron", team: "Shot Callaz", gross: "99", net: "86" },
          { name: "Ford", team: "Shot Callaz", gross: "103", net: "78" },
          { name: "Sean", team: "Ballaz", gross: "106", net: "85" },
          { name: "Mitch", team: "Ballaz", gross: "106", net: "89" },
        ],
      },
      {
        label: "G3",
        teamA: { players: ["Eric", "Jared"], team: "Impalaz" },
        teamB: { players: ["Rane", "Dan"], team: "Shot Callaz" },
        winnerTeam: "Impalaz",
        score: "3",
        playerScores: [
          { name: "Eric", team: "Impalaz", gross: "111", net: "83" },
          { name: "Jared", team: "Impalaz", gross: "103", net: "72" },
          { name: "Rane", team: "Shot Callaz", gross: "103", net: "75" },
          { name: "Dan", team: "Shot Callaz", gross: "136", net: "85" },
        ],
      },
    ],
    bestNet: {
      name: "Adam",
      team: "Ballaz",
      net: "70",
      points: 1,
    },
  },

  day3: {
    title: "Day 3 — Ancil Hoffman (Individual match play)",
    matchups: [
      {
        label: "G1-A",
        p1: { name: "Cameron", team: "Shot Callaz", gross: "80", net: "69" },
        p2: { name: "Mitch", team: "Ballaz", gross: "105", net: "90" },
        winnerTeam: "Shot Callaz",
        points: "3",
      },
      {
        label: "G1-B",
        p1: { name: "Joe", team: "Impalaz", gross: "108", net: "87" },
        p2: { name: "Drew", team: "Ballaz", gross: "113", net: "85" },
        winnerTeam: "Ballaz",
        points: "3",
      },
      {
        label: "G2-A",
        p1: { name: "Adam", team: "Ballaz", gross: "116", net: "78" },
        p2: { name: "Dan", team: "Shot Callaz", gross: "134", net: "88" },
        winnerTeam: "Ballaz",
        points: "3",
      },
      {
        label: "G2-B",
        p1: { name: "Ford", team: "Shot Callaz", gross: "93", net: "71" },
        p2: { name: "Eric", team: "Impalaz", gross: "108", net: "83" },
        winnerTeam: "Shot Callaz",
        points: "3",
      },
      {
        label: "G3-A",
        p1: { name: "Zion", team: "Impalaz", gross: "110", net: "88" },
        p2: { name: "Sean", team: "Ballaz", gross: "98", net: "79" },
        winnerTeam: "Ballaz",
        points: "2",
      },
      {
        label: "G3-B",
        p1: { name: "Rane", team: "Shot Callaz", gross: "100", net: "75" },
        p2: { name: "Jared", team: "Impalaz", gross: "108", net: "81" },
        winnerTeam: "Shot Callaz",
        points: "3",
      },
    ],

    // New: Day 3 best net score (+1 by default)
    bestNet: {
      name: "Cameron",
      team: "Shot Callaz",
      net: "69",
      points: 1,
    },

    // New: Best combined net (Day 2 + Day 3) bonus (set points as desired)
    bestCombined: {
      name: "Adam",
      team: "Ballaz",
      net: "148",     // combined net
      points: 1,     // set this to whatever your rules are
    },
  },
};
