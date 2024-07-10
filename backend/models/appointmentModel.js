const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    vetId: {
        type: String,
        required: true,
    },
    vetName: {
        type: String,
        required: true,
    },
    patientId: {
        type: String,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    additionalInfo: {
        type: String,
    },
    status: {
        type: String,
        default: "pending",
    },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;