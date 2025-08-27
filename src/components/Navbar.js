import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 text-white px-6 py-3">
      <h1 className="text-xl font-bold">HabitTracker</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>

        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
}
