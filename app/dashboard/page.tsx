// app/dashboard/page.js
"use client";
import Link from "next/link";

export default function DashboardLanding() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Select Your Dashboard</h1>
      <p className="text-gray-600 text-center mb-12">
        Click on the dashboard you want to access:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Link
          href="/dashboard/doctor"
          className="bg-blue-600 text-white p-12 rounded-2xl shadow-lg hover:bg-blue-700 transition flex flex-col items-center justify-center text-center"
        >
          <span className="text-3xl font-bold mb-2">Doctor Dashboard</span>
          <span className="text-lg">View prescriptions, manage appointments, and patient info.</span>
        </Link>

        <Link
          href="/dashboard/patient"
          className="bg-green-600 text-white p-12 rounded-2xl shadow-lg hover:bg-green-700 transition flex flex-col items-center justify-center text-center"
        >
          <span className="text-3xl font-bold mb-2">Patient Dashboard</span>
          <span className="text-lg">Book appointments, view prescriptions, and manage profile.</span>
        </Link>

        <Link
          href="/dashboard/pharmacist"
          className="bg-yellow-500 text-white p-12 rounded-2xl shadow-lg hover:bg-yellow-600 transition flex flex-col items-center justify-center text-center"
        >
          <span className="text-3xl font-bold mb-2">Pharmacist Dashboard</span>
          <span className="text-lg">Manage orders, verify prescriptions, and track deliveries.</span>
        </Link>

        <Link
          href="/dashboard/admin"
          className="bg-red-600 text-white p-12 rounded-2xl shadow-lg hover:bg-red-700 transition flex flex-col items-center justify-center text-center"
        >
          <span className="text-3xl font-bold mb-2">Admin Dashboard</span>
          <span className="text-lg">Manage users, monitor activity, and view analytics.</span>
        </Link>
      </div>
    </div>
  );
}
