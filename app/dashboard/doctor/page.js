"use client";
import Link from "next/link";
import { Stethoscope, Calendar, Video } from "lucide-react";

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>
      <p className="text-gray-600 mb-6">Manage appointments, create prescriptions, and conduct video consultations.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/dashboard/doctor/prescriptions"
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2 flex flex-col items-center text-center group"
        >
          <Stethoscope className="text-blue-600 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Prescriptions</span>
          <span className="text-gray-500">Create or view prescriptions</span>
        </Link>

        <Link
          href="/dashboard/doctor/appointments"
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2 flex flex-col items-center text-center group"
        >
          <Calendar className="text-green-600 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold mb-2 group-hover:text-green-600 transition-colors">Appointments</span>
          <span className="text-gray-500">View upcoming patient appointments</span>
        </Link>

        <Link
          href="/dashboard/doctor/video-call"
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2 flex flex-col items-center text-center group"
        >
          <Video className="text-red-600 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">Video Consultation</span>
          <span className="text-gray-500">Start a live consultation with a patient</span>
        </Link>
      </div>
    </div>
  );
}
