const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Bet = mongoose.model('Bet');

// Get bets
router.get("/", async (req, res) => {
  try {
    const bets = await Bet.find({});
    res.json(bets);
  } catch (error) {
    console.error("Error fetching bets:", error);
    res.status(500).json({ error: "An error occurred while fetching bets." });
  }
});

// Add new bet
router.post("/", async (req, res) => {
  try {
    const newBet = new Bet(req.body);
    const savedBet = await newBet.save();
    res.status(201).json(savedBet);
  } catch (error) {
    console.error("Error creating bet:", error);
    res.status(500).json({ error: "An error occurred while creating the bet." });
  }
});

// Update bet
router.put("/:id", async (req, res) => {
  try {
    const updatedBet = await Bet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // returns the updated document
    );
    res.status(200).json(updatedBet);
  } catch (error) {
    console.error("Error updating bet:", error);
    res.status(500).json({ error: "An error occurred while updating the bet." });
  }
});

// Delete bet
router.delete("/:id", async (req, res) => {
  try {
    await Bet.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting bet:", error);
    res.status(500).json({ error: "An error occurred while deleting the bet." });
  }
});

module.exports = router;
