import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="p-4">{children}</main>
        {/* Toast Notification */}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
