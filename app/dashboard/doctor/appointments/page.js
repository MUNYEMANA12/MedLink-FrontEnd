// app/dashboard/doctor/appointments/page.js
"use client";
import { useState } from "react";

export default function DoctorAppointments() {
  const [appointments] = useState([
    { id: 1, patient: "John Doe", date: "2025-11-15", time: "10:00 AM" },
    { id: 2, patient: "Jane Smith", date: "2025-11-16", time: "2:00 PM" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Appointments</h1>
      <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
        {appointments.length === 0 ? (
          <p className="text-gray-600">No appointments scheduled.</p>
        ) : (
          <ul className="space-y-4">
            {appointments.map((a) => (
              <li key={a.id} className="border p-4 rounded-lg flex justify-between">
                <span>{a.patient}</span>
                <span>{a.date} @ {a.time}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
