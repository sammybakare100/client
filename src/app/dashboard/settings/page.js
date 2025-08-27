"use client";
import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  useEffect(() => {
    // Demo: load user data (later fetch from backend)
    setProfile({ name: "Samuel", email: "samuel@example.com" });
  }, []);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const saveProfile = (e) => {
    e.preventDefault();
    console.log("Profile saved:", profile);
    alert("Profile saved! (demo)");
  };

  const updatePassword = (e) => {
    e.preventDefault();
    if (password.new !== password.confirm) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Password updated:", password);
    alert("Password updated! (demo)");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">⚙️ Settings</h1>
      <p className="text-gray-600 mb-6">
        Manage your profile, account, and app preferences here.
      </p>

      <div className="space-y-6">
        {/* Profile Info */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <form className="space-y-4" onSubmit={saveProfile}>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              placeholder="Full Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Email Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Password Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Password</h2>
          <form className="space-y-4" onSubmit={updatePassword}>
            <input
              type="password"
              name="current"
              value={password.current}
              onChange={handlePasswordChange}
              placeholder="Current Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="new"
              value={password.new}
              onChange={handlePasswordChange}
              placeholder="New Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="confirm"
              value={password.confirm}
              onChange={handlePasswordChange}
              placeholder="Confirm New Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
