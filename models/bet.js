const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
  stake: Number,
  odds: Number,
  tipper: String,
  date: Date,
  sport: String,
  league: String,
  result: String,
  type: String,
});

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;
