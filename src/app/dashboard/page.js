"use client";
import { useEffect, useState } from "react";
import {
  fetchHabits,
  addHabit,
  toggleHabit,
  deleteHabit,
} from "../../utils/api";

export default function Dashboard() {
  const [username, setUsername] = useState("User");
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUsername(payload.name || "User");
    }
    loadHabits();
  }, []);

  const loadHabits = async () => {
    try {
      const data = await fetchHabits();
      setHabits(data);
    } catch (err) {
      console.error("Error fetching habits:", err.message);
    }
  };

  const handleAddHabit = async () => {
    if (!newHabit.trim()) return;
    try {
      await addHabit(newHabit);
      setNewHabit("");
      loadHabits();
    } catch (err) {
      console.error("Error adding habit:", err.message);
    }
  };

  const handleToggle = async (id) => {
    try {
      await toggleHabit(id);
      loadHabits();
    } catch (err) {
      console.error("Error toggling habit:", err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteHabit(id);
      loadHabits();
    } catch (err) {
      console.error("Error deleting habit:", err.message);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome back, {username}! 👋
      </h1>

      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="📝 Add a new habit"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            className="w-full md:w-2/3 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 placeholder-gray-500"
          />
          <button
            onClick={handleAddHabit}
            className="w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            + Add Habit
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-gray-700">Habit</th>
              <th className="py-2 text-gray-700">Status</th>
              <th className="py-2 text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {habits.map((habit) => (
              <tr key={habit._id} className="border-b hover:bg-gray-50">
                <td className="py-2 text-gray-800">{habit.name}</td>
                <td className="py-2">
                  {habit.completed ? (
                    <span className="text-green-600 font-semibold">
                      Completed
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">Pending</span>
                  )}
                </td>
                <td className="py-2 space-x-2">
                  <button
                    onClick={() => handleToggle(habit._id)}
                    className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500 transition"
                  >
                    Toggle
                  </button>
                  <button
                    onClick={() => handleDelete(habit._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {habits.length === 0 && (
              <tr>
                <td colSpan="3" className="py-4 text-center text-gray-500">
                  No habits added yet. Start by adding one above!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
