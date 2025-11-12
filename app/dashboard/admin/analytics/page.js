"use client";
import { useState } from "react";

export default function AnalyticsPage() {
  const [stats] = useState({
    patients: 120,
    doctors: 15,
    pharmacists: 8,
    totalAppointments: 320,
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">System Analytics</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-bold mb-2">Patients</h2>
          <p className="text-gray-600 text-2xl">{stats.patients}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-bold mb-2">Doctors</h2>
          <p className="text-gray-600 text-2xl">{stats.doctors}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-bold mb-2">Pharmacists</h2>
          <p className="text-gray-600 text-2xl">{stats.pharmacists}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-bold mb-2">Appointments</h2>
          <p className="text-gray-600 text-2xl">{stats.totalAppointments}</p>
        </div>
      </div>
    </div>
  );
}
