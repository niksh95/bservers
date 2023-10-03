const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://SA:qetu1357@cluster0.u5ghvtv.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

const betSchema = new mongoose.Schema({
    stake: Number,
    odds: Number,
    tipper: String,
    date: Date,
    sport: String,
    league: String,
    result: String,
    type: String
});

const Bet = mongoose.model('Bet', betSchema);
const PendingBet = mongoose.model('PendingBet', betSchema);

module.exports = {
    connectDB,
    models: {
        Bet,
        PendingBet
    }
};
