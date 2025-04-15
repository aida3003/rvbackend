const mongoose = require("mongoose");

const dashboarschema = new mongoose.Schema({
  patientName: String,
  date: Date,
  status: {
    type: String,
    enum: ["en attente", "confirmé", "annulé"],
    default: "en attente"
  }
});

const Dashboard = mongoose.model("Dashboard", dashboarschema);

module.exports = Dashboard;
