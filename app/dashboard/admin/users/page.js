"use client";
import { useState } from "react";

export default function UsersPage() {
  const [users] = useState([
    { id: 1, name: "Alice", role: "Patient" },
    { id: 2, name: "Dr. Bob", role: "Doctor" },
    { id: 3, name: "Charlie", role: "Pharmacist" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-t">
              <td className="p-4">{user.id}</td>
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
