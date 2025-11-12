// app/dashboard/prescriptions/page.js
"use client";
import { useState } from "react";

export default function Prescriptions() {
  const [patient, setPatient] = useState("");
  const [medicines, setMedicines] = useState("");

  const handlePrescription = (e) => {
    e.preventDefault();
    alert(`Prescription created for ${patient}: ${medicines}`);
    // Later: connect to backend API to save prescription
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-6">Create/View Prescriptions</h2>

      {/* Doctor Form */}
      <form
        onSubmit={handlePrescription}
        className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Patient Name"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <textarea
          placeholder="Medicines and Instructions"
          value={medicines}
          onChange={(e) => setMedicines(e.target.value)}
          className="w-full border p-3 rounded-lg"
          rows={4}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Create Prescription
        </button>
      </form>

      {/* Placeholder: List of existing prescriptions */}
      <div className="mt-10 max-w-lg mx-auto">
        <h3 className="text-xl font-semibold mb-4">Existing Prescriptions</h3>
        <ul className="space-y-3">
          <li className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">Patient: John Doe</p>
            <p>Medicines: Paracetamol 500mg - 3 times a day</p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">Patient: Jane Smith</p>
            <p>Medicines: Amoxicillin 250mg - 2 times a day</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
