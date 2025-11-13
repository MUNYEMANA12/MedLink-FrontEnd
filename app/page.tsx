"use client";
import Image from "next/image";

import Link from "next/link";
import { HeartPulse, Stethoscope, Smartphone, Truck, Clipboard } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* ---------------- Hero Section ---------------- */}
      <section className="pt-32 pb-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Bridging Patients and Doctors <br /> Through{" "}
            <span className="text-blue-600">Digital Health</span>
          </h1>
          <p className="text-lg text-gray-600">
            MedLink Rwanda connects patients, doctors, and pharmacies through a
            secure and modern telemedicine platform — accessible, affordable, and efficient healthcare for all.
          </p>

          <div className="flex space-x-4">
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Join Now
            </Link>
            <Link
              href="/learn-more"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image
            src="/doctor-video-call.jpg"
            alt="Doctor conducting virtual consultation"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* ---------------- Dashboard Cards Section ---------------- */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Access Your Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          <Link
            href="/dashboard/doctor"
            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center group"
          >
            <Stethoscope className="text-blue-600 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Doctor</span>
            <span className="text-gray-500">Manage prescriptions & appointments</span>
          </Link>

          <Link
            href="/dashboard/patient"
            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center group"
          >
            <HeartPulse className="text-green-600 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold mb-2 group-hover:text-green-600 transition-colors">Patient</span>
            <span className="text-gray-500">Book appointments & view prescriptions</span>
          </Link>

          <Link
            href="/dashboard/pharmacist"
            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center group"
          >
            <Truck className="text-yellow-500 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">Pharmacist</span>
            <span className="text-gray-500">Manage orders & deliveries</span>
          </Link>

          <Link
            href="/dashboard/admin"
            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center group"
          >
            <Clipboard className="text-red-600 w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">Admin</span>
            <span className="text-gray-500">Manage users & analytics</span>
          </Link>
        </div>
      </section>

      {/* ---------------- Features Section ---------------- */}
      <section className="py-20 bg-white text-center border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-12">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <Stethoscope className="text-blue-600 mx-auto w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Virtual Consultations</h3>
            <p className="text-gray-600">
              Connect with licensed doctors from anywhere using our secure video consultation system.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <Smartphone className="text-blue-600 mx-auto w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Prescriptions</h3>
            <p className="text-gray-600">
              Get e-prescriptions sent directly to your phone or preferred pharmacy in seconds.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <HeartPulse className="text-blue-600 mx-auto w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pharmacy Integration</h3>
            <p className="text-gray-600">
              Order and receive medicines conveniently through connected pharmacies nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- How It Works Section ---------------- */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <span className="text-blue-600 font-bold text-xl mb-2 block">1</span>
            <h3 className="font-semibold mb-2">Sign Up</h3>
            <p className="text-gray-600 text-sm">Register as a patient, doctor, or pharmacist.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <span className="text-blue-600 font-bold text-xl mb-2 block">2</span>
            <h3 className="font-semibold mb-2">Book Appointment</h3>
            <p className="text-gray-600 text-sm">Patients schedule consultations in seconds.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <span className="text-blue-600 font-bold text-xl mb-2 block">3</span>
            <h3 className="font-semibold mb-2">Consult Doctor</h3>
            <p className="text-gray-600 text-sm">Secure video consultation with your doctor.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <span className="text-blue-600 font-bold text-xl mb-2 block">4</span>
            <h3 className="font-semibold mb-2">Get Prescription & Delivery</h3>
            <p className="text-gray-600 text-sm">Receive e-prescription and medicine delivery.</p>
          </div>
        </div>
      </section>

      {/* ---------------- Call-To-Action Section ---------------- */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
        <p className="text-lg mb-6">Join MedLink Rwanda and take control of your healthcare today.</p>
        <Link
          href="/signup"
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Join Now
        </Link>
      </section>

     
    </main>
  );
}
