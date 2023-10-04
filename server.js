const express = require("express");
const cors = require("cors");
const { connectDB } = require("./database.js");

const app = express();
const betsRouter = require(".pages/api/bets");
const pendingBetsRouter = require(".pages/api/pendingBets"); 

app.use(express.json());
app.use(cors());
app.use("/bets", betsRouter);
app.use("/pendingbets", pendingBetsRouter);

// Export the app for Vercel
module.exports = app;
