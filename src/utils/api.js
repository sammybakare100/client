const BASE_URL = "http://localhost:5000/api";

// Get token from localStorage (client only)
const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// Fetch all habits for logged-in user
export const fetchHabits = async () => {
  const res = await fetch(`${BASE_URL}/habits`, { headers: getHeaders() });
  if (!res.ok) throw new Error("Failed to fetch habits");
  return res.json();
};

// Add a new habit
export const addHabit = async (habitName) => {
  const res = await fetch(`${BASE_URL}/habits`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ name: habitName }), // wrap it in an object
  });
  if (!res.ok) throw new Error("Failed to add habit");
  return res.json();
};

// Toggle habit completed
export const toggleHabit = async (habitId) => {
  const res = await fetch(`${BASE_URL}/habits/${habitId}`, {
    method: "PUT",
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Failed to toggle habit");
  return res.json();
};

// Delete a habit
export const deleteHabit = async (habitId) => {
  const res = await fetch(`${BASE_URL}/habits/${habitId}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Failed to delete habit");
  return res.json();
};
