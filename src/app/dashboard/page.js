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

  // Demo user ID; replace with actual logged-in user ID later
  const userId = "your-demo-user-id";

  useEffect(() => {
    setUsername("Samuel"); // demo
    loadHabits();
  }, []);

  // Fetch habits from backend
  const loadHabits = async () => {
    try {
      const data = await fetchHabits(userId);
      setHabits(data);
    } catch (err) {
      console.error("Error fetching habits:", err);
    }
  };

  // Add a new habit
  const handleAddHabit = async () => {
    if (!newHabit) return;
    try {
      const createdHabit = await addHabit({ user: userId, name: newHabit });
      console.log("Created habit:", createdHabit);
      setNewHabit("");
      loadHabits();
    } catch (err) {
      console.error("Error adding habit:", err);
    }
  };

  // Toggle habit completed
  const handleToggle = async (id) => {
    try {
      await toggleHabit(id);
      loadHabits();
    } catch (err) {
      console.error("Error toggling habit:", err);
    }
  };

  // Delete habit
  const handleDelete = async (id) => {
    try {
      await deleteHabit(id);
      loadHabits();
    } catch (err) {
      console.error("Error deleting habit:", err);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome back, {username}! 👋
      </h1>

      {/* Habit List */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Habits</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="New habit"
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
              className="border rounded px-3 py-1"
            />
            <button
              onClick={handleAddHabit}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              + Add Habit
            </button>
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Habit</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {habits.map((habit) => (
              <tr key={habit._id} className="border-b hover:bg-gray-50">
                <td className="py-2">{habit.name}</td>
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
                    className="px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500 transition"
                  >
                    Toggle
                  </button>
                  <button
                    onClick={() => handleDelete(habit._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
