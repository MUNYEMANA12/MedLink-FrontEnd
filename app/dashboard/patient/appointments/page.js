// app/dashboard/patient/appointments/page.js
"use client";
import { useState } from "react";

export default function PatientAppointments() {
  const [appointment, setAppointment] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${appointment.patient} with Dr. ${appointment.doctor} on ${appointment.date} at ${appointment.time}`);
    // TODO: Call backend API to save appointment
    setAppointment({ patient: "", doctor: "", date: "", time: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Patient Name"
          value={appointment.patient}
          onChange={(e) => setAppointment({ ...appointment, patient: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Doctor Name"
          value={appointment.doctor}
          onChange={(e) => setAppointment({ ...appointment, doctor: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="date"
          value={appointment.date}
          onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="time"
          value={appointment.time}
          onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
