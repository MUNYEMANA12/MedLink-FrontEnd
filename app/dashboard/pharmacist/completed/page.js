"use client";
import { useState } from "react";

export default function CompletedOrdersPage() {
  const [completed] = useState([
    { id: 1, patient: "Charlie", medicine: "Ibuprofen", deliveredOn: "2025-11-10" },
    { id: 2, patient: "Diana", medicine: "Cough Syrup", deliveredOn: "2025-11-11" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Completed Orders</h1>
      <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Order ID</th>
            <th className="p-4 text-left">Patient</th>
            <th className="p-4 text-left">Medicine</th>
            <th className="p-4 text-left">Delivered On</th>
          </tr>
        </thead>
        <tbody>
          {completed.map(order => (
            <tr key={order.id} className="border-t">
              <td className="p-4">{order.id}</td>
              <td className="p-4">{order.patient}</td>
              <td className="p-4">{order.medicine}</td>
              <td className="p-4">{order.deliveredOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
