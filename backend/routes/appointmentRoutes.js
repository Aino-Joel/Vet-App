const express = require('express')
const {
    getMyAppointments,
    getMyBookings,
    createAppointment,
    deleteAppointment,
    rescheduleAppointment,
    approveAppointment,
    declineAppointment,
    getAppointment,
} = require('../controllers/appointmentControllers')
const { requireAuth } = require('../middleware/requireAuth')

//require authentication for all routes
const router = express.Router()

//GET all My Appointments
router.get('/my-appointments', requireAuth, getMyAppointments)

//GET all My Appointments
router.get('/my-bookings', requireAuth, getMyBookings)

//POST a new Appointment
router.post('/create', requireAuth, createAppointment)

//GET Appointment
router.get('/:id', requireAuth, getAppointment)

//DELETE a new Appointment
router.delete('/:id', requireAuth, deleteAppointment)

//UPDATE a Appointment
router.put('/update/:id', requireAuth, rescheduleAppointment)

//approve Appointment
router.post("/approve/:id", requireAuth, approveAppointment);

//decline Appointment
router.post("/decline/:id", requireAuth, declineAppointment);



module.exports = router