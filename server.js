const express = require("express");
const cors = require("cors");
const { connectDB } = require("./database.js"); // Import DB connection

const app = express();
const betsRouter = require("./apis/bets");
const pendingBetsRouter = require("./apis/pendingBets"); 

app.use(express.json());
app.use(cors());
app.use("/bets", betsRouter);
app.use("/pendingbets", pendingBetsRouter);

// Connect to DB and then start the server
connectDB().then(() => {
    app.listen(4000, () => console.log("Server on localhost:4000"));
});
