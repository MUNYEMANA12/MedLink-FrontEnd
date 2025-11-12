"use client";
import { useState } from "react";

export default function PatientPrescriptions() {
  const [prescriptions] = useState([
    { id: 1, doctor: "Dr. Uwimana", medicine: "Paracetamol 500mg", date: "2025-11-12" },
    { id: 2, doctor: "Dr. Niyonsaba", medicine: "Amoxicillin 250mg", date: "2025-11-10" }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Your Prescriptions</h1>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {prescriptions.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p><strong>Doctor:</strong> {p.doctor}</p>
            <p><strong>Medicine:</strong> {p.medicine}</p>
            <p><strong>Date:</strong> {p.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
