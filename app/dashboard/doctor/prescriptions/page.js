// app/dashboard/doctor/prescriptions/page.js
"use client";
import { useState } from "react";

export default function DoctorPrescriptions() {
  const [patient, setPatient] = useState("");
  const [medicines, setMedicines] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Prescription created for ${patient}: ${medicines}`);
    // TODO: Call backend API here
    setPatient("");
    setMedicines("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Create Prescription</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          placeholder="Medicines / Notes"
          value={medicines}
          onChange={(e) => setMedicines(e.target.value)}
          className="w-full p-3 border rounded-lg"
          rows={4}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Create Prescription
        </button>
      </form>
    </div>
  );
}
