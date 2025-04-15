
 const express = require('express');
 const Dashboard = require('../models/Dashboard.js');
const router = express.Router();

// GET /dashboard/stats
router.get("/stats", async (req, res) => {
  try {
    const total = await Dashboard.countDocuments();
    const enAttente = await Dashboard.countDocuments({ status: "en attente" });
    const confirmes = await Dashboard.countDocuments({ status: "confirmé" });
    const annules = await Dashboard.countDocuments({ status: "annulé" });

    res.json({ total, enAttente, confirmes, annules });
  } catch (error) {
    console.error("Erreur lors de la récupération des statistiques:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;    
