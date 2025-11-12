// app/dashboard/appointments/page.js
"use client";
import { useState } from "react";

export default function Appointments() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Appointment booked with Dr. ${doctor} on ${date} at ${time}`);
    // Later: call backend API
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-6">Book Appointment</h2>
      <form
        onSubmit={handleBooking}
        className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />
        <textarea
          placeholder="Reason / Symptoms"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full border p-3 rounded-lg"
          rows={3}
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </form>
    </div>
  );
}
