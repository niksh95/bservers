const mongoose = require('mongoose');

const pendingBetSchema = new mongoose.Schema({
  stake: Number,
  odds: Number,
  tipper: String,
  date: Date,
  sport: String,
  league: String,
  result: String,
  type: String,
});

const PendingBet = mongoose.model('PendingBet', pendingBetSchema);

module.exports = PendingBet;
