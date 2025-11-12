"use client"; // <-- must be at the very top
import Link from "next/link";
import { Truck, Package, ClipboardCheck } from "lucide-react";

export default function PharmacistDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Pharmacist Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Manage prescriptions, orders, and deliveries efficiently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* View Orders */}
        <Link
          href="/dashboard/pharmacist/orders"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center group"
        >
          <Package className="text-yellow-500 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">View Orders</span>
          <span className="text-gray-500">Check new prescriptions and pending orders</span>
        </Link>

        {/* Delivery Tracking */}
        <Link
          href="/dashboard/pharmacist/deliveries"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center group"
        >
          <Truck className="text-green-500 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold mb-2 group-hover:text-green-500 transition-colors">Delivery Tracking</span>
          <span className="text-gray-500">Monitor delivery status and update progress</span>
        </Link>

        {/* Completed Orders */}
        <Link
          href="/dashboard/pharmacist/completed"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center group"
        >
          <ClipboardCheck className="text-blue-500 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">Completed Orders</span>
          <span className="text-gray-500">Review all successfully delivered orders</span>
        </Link>
      </div>
    </div>
  );
}
