"use client";
import Link from "next/link";
import { Users, ChartBar } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">Manage users and view system analytics.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/dashboard/admin/users"
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center group"
        >
          <Users className="text-blue-600 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Manage Users</span>
          <span className="text-gray-500">View, edit, or remove users</span>
        </Link>

        <Link
          href="/dashboard/admin/analytics"
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center group"
        >
          <ChartBar className="text-green-600 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold mb-2 group-hover:text-green-600 transition-colors">Analytics</span>
          <span className="text-gray-500">View system usage and stats</span>
        </Link>
      </div>
    </div>
  );
}
