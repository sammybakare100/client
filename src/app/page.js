// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div
        className="flex-grow flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-2xl text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Track Your Habits, Transform Your Life
          </h1>
          <p className="text-lg mb-6">
            Build better habits and stay consistent with our simple and powerful
            habit tracker. Monitor your progress, stay accountable, and achieve
            your goals.
          </p>
          <div className="space-x-4">
            <Link
              href="/register"
              className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 bg-gray-200 text-black rounded-xl hover:bg-gray-300 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          Why Use Our Habit Tracker?
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Easy to Use
            </h3>
            <p className="text-gray-600">
              Add and track your habits effortlessly with a clean, simple
              interface designed for focus.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Visual Progress
            </h3>
            <p className="text-gray-600">
              Stay motivated with progress charts and analytics that show how
              consistent you’ve been.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Stay Accountable
            </h3>
            <p className="text-gray-600">
              Set reminders and never miss a habit. Build streaks and reward
              yourself for progress.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Habit Tracker. All rights reserved.
          </p>
          <div className="space-x-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-white">
              Dashboard
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
