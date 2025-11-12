"use client";
import { useState } from "react";

export default function OrdersPage() {
  const [orders] = useState([
    { id: 1, patient: "Alice", medicine: "Paracetamol", status: "Pending" },
    { id: 2, patient: "Bob", medicine: "Amoxicillin", status: "Pending" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">New Orders</h1>
      <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Order ID</th>
            <th className="p-4 text-left">Patient</th>
            <th className="p-4 text-left">Medicine</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-t">
              <td className="p-4">{order.id}</td>
              <td className="p-4">{order.patient}</td>
              <td className="p-4">{order.medicine}</td>
              <td className="p-4">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
