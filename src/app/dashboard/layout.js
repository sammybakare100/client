import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-gray-100">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-lg flex flex-col">
            <div className="p-6 border-b">
              <h1 className="text-2xl font-bold text-blue-600">Habitify</h1>
            </div>
            <nav className="flex-1 p-4 space-y-4">
              <Link
                href="/dashboard"
                className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              >
                📊 Dashboard
              </Link>
              <Link
                href="/dashboard/analytics"
                className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              >
                📈 Analytics
              </Link>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              >
                ⚙️ Settings
              </Link>
              <Link
                href="/login"
                className="block px-4 py-2 rounded-lg text-red-600 hover:bg-red-100"
              >
                🚪 Logout
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
