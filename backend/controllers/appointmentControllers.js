const Appointment = require("../models/appointmentModel");
const Doctor = require("../models/doctorModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

//get all my Appointments
const getMyAppointments = async (req, res) => {
    const user_id = req.user._id;

    const appointments = await Appointment.find({ patientId: user_id }).sort({ createdAt: -1 });

    res.status(200).json(appointments);
};

//get all my Bookings
const getMyBookings = async (req, res) => {
    const user_id = req.user._id;
    const vet = await Doctor.findOne({ userId: user_id })

    const bookings = await Appointment.find({ vetId: vet._id }).sort({ createdAt: -1 });

    res.status(200).json(bookings);
};

//get single Appointment
const getAppointment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Appointment" });
    }

    const appointment = await Appointment.findById(id);

    if (!appointment) {
        return res.status(404).json({ error: error.message });
    }

    res.status(200).json(appointment);
};

//create new Appointment
const createAppointment = async (req, res) => {
    //   const { title, snippet, body, author, authorId } = req.body;

    //   let emptyFields = [];

    //   if (!title) {
    //     emptyFields.push("title");
    //   }
    //   if (!load) {
    //     emptyFields.push("load");
    //   }
    //   if (!reps) {
    //     emptyFields.push("reps");
    //   }
    //   if (emptyFields.length > 0) {
    //     return res
    //       .status(400)
    //       .json({ error: "Please fill in all fields", emptyFields });
    //   }

    //add doc to db
    try {
        const vet = await Doctor.findById(req.body.vetId)
        const vetUser = await User.findById(vet.userId)
        const appointment = await Appointment.create({ ...req.body, vetName: `${vet.fName} ${vet.lName}` });

        const unseenNotifications = vetUser.unseenNotifications;
        unseenNotifications.push({
            type: "Appointment request",
            message: `${appointment.patientName} has requested for an appointment`,
            onClickPath: "/my-bookings",
        });

        await User.findByIdAndUpdate(vetUser._id, { unseenNotifications });

        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//delete a Appointment
const deleteAppointment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Appointment" });
    }

    const appointment = await Appointment.findOneAndDelete({ _id: id });

    const declinedUser = await User.findOne({ _id: appointment.patientId });

    const unseenNotifications = declinedUser.unseenNotifications;
    unseenNotifications.push({
        type: " Appointment cancelled",
        message: `Your Appointment with ${appointment.vetName} was cancelled`,
        onClickPath: "/my-appointments",
    });

    await User.findByIdAndUpdate(declinedUser._id, { unseenNotifications });

    if (!appointment) {
        return res.status(404).json({ error: "No such Appointment" });
    }

    res.status(200).json(appointment);
};

//update Appointment
const rescheduleAppointment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Appointment" });
    }

    const appointment = await Appointment.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    const rescheduledUser = await User.findOne({ _id: appointment.patientId });

    const unseenNotifications = rescheduledUser.unseenNotifications;
    unseenNotifications.push({
        type: " Appointment rescheduled",
        message: "Your appointment was rescheduled",
        onClickPath: "/my-appointments",
    });

    await User.findByIdAndUpdate(rescheduledUser._id, { unseenNotifications });

    if (!appointment) {
        return res.status(404).json({ error: "No such Appointment" });
    }

    res.status(200).json(appointment);
};

//approve Appointment
const approveAppointment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Appointment" });
    }

    const approvedAppointment = await Appointment.findOne({ _id: id });
    const approvedUser = await User.findOne({ _id: approvedAppointment.patientId });

    const unseenNotifications = approvedUser.unseenNotifications;
    unseenNotifications.push({
        type: "Vet Appointment approved",
        message: `Your Appointment with ${approvedAppointment.vetName} was approved`,
        onClickPath: "/my-appointments",
    });

    await Appointment.findByIdAndUpdate(id, { status: "approved" });

    await User.findByIdAndUpdate(approvedUser._id, { unseenNotifications });

    if (!approvedAppointment) {
        return res.status(404).json({ error: "No such Appointment" });
    }

    res.status(200).json(approvedAppointment);
};

//decline Appointment
const declineAppointment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Appointment" });
    }

    const declinedAppointment = await Appointment.findOne({ _id: id });
    const declinedUser = await User.findOne({ _id: declinedAppointment.patientId });

    const unseenNotifications = declinedUser.unseenNotifications;
    unseenNotifications.push({
        type: "Appointment request declined",
        message: `Your Appointment with ${declinedAppointment.vetName} was declined`,
        onClickPath: "/my-appointments",
    });

    await Appointment.findByIdAndUpdate(id, { status: "declined" });

    await User.findByIdAndUpdate(declinedUser._id, { unseenNotifications });

    if (!declinedAppointment) {
        return res.status(404).json({ error: "No such Appointment" });
    }

    res.status(200).json(declinedAppointment);
};

module.exports = {
    getMyAppointments,
    getMyBookings,
    getAppointment,
    createAppointment,
    deleteAppointment,
    rescheduleAppointment,
    approveAppointment,
    declineAppointment
};