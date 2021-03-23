const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
	date: Date,
	customer: String,
	services: Array,
	price: Number,
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
