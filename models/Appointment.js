const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  doctorName: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  reason: { type: String, required: true },
  status: { type: String, default: 'en attente' }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;