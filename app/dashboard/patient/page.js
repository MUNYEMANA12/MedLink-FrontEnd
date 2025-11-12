"use client";
import Link from "next/link";
import { HeartPulse, Clipboard } from "lucide-react";

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>
      <p className="text-gray-600 mb-6">Book appointments and view your prescriptions.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/dashboard/patient/appointments"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center group"
        >
          <HeartPulse className="text-green-600 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold mb-2 group-hover:text-green-600 transition-colors">
            Book/View Appointments
          </span>
        </Link>

        <Link
          href="/dashboard/patient/prescriptions"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center group"
        >
          <Clipboard className="text-blue-600 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            View Prescriptions
          </span>
        </Link>
      </div>
    </div>
  );
}
