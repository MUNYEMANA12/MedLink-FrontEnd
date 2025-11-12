// app/dashboard/orders/page.js
"use client";
import { useState } from "react";

export default function Orders() {
  const [orders] = useState([
    { id: 1, medicine: "Paracetamol", status: "Out for Delivery" },
    { id: 2, medicine: "Amoxicillin", status: "Preparing" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-6">Delivery Orders</h2>
      <div className="max-w-lg mx-auto space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-xl shadow-lg flex justify-between items-center">
            <div>
              <p className="font-semibold">{order.medicine}</p>
              <p className="text-gray-500">Status: {order.status}</p>
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Refresh
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
