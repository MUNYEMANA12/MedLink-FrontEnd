"use client";
import { useState } from "react";

export default function DeliveriesPage() {
  const [deliveries] = useState([
    { id: 1, patient: "Alice", status: "On the way" },
    { id: 2, patient: "Bob", status: "Out for delivery" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Delivery Tracking</h1>
      <ul className="space-y-4">
        {deliveries.map(d => (
          <li key={d.id} className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
            <span>Order #{d.id} for {d.patient}</span>
            <span className="text-blue-600 font-semibold">{d.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
