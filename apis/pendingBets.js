const express = require("express");
const mongoose = require("mongoose"); 
const router = express.Router();
const PendingBet = mongoose.model('PendingBet'); // Assuming Mongoose model is used

router.get("/", async (req, res) => {
  try {
    const bets = await PendingBet.find({});
    res.json(bets);
  } catch (error) {
    console.error("Error fetching pending bets:", error);
    res.status(500).json({ error: "An error occurred while fetching pending bets." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { stake, odds, tipper, date, sport, league, result, type } = req.body;
    const newPendingBet = new PendingBet({ stake, odds, tipper, date, sport, league, result, type });
    const savedBet = await newPendingBet.save();
    res.status(201).json(savedBet);
  } catch (error) {
    console.error("Error creating pending bet:", error);
    res.status(500).json({ error: "An error occurred while creating the pending bet." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;  
    const deletedBet = await PendingBet.findByIdAndDelete(id);
    if (deletedBet) {
      res.json(deletedBet);
    } else {
      res.status(404).json({ message: "Pending bet not found." });
    }
  } catch (error) {
    console.error("Error deleting pending bet:", error);
    res.status(500).json({ error: "An error occurred while deleting the pending bet." });
  }
});

// Additional routes...

module.exports = router;
