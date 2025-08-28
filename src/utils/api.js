const BASE_URL = "http://localhost:5000/api";

const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const fetchHabits = async () => {
  const res = await fetch(`${BASE_URL}/habits`, { headers: getHeaders() });
  if (!res.ok) throw new Error("Failed to fetch habits");
  return res.json();
};

export const addHabit = async (habitName) => {
  const res = await fetch(`${BASE_URL}/habits`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ name: habitName }),
  });
  if (!res.ok) throw new Error("Failed to add habit");
  return res.json();
};

export const toggleHabit = async (habitId) => {
  const res = await fetch(`${BASE_URL}/habits/${habitId}`, {
    method: "PUT",
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Failed to toggle habit");
  return res.json();
};

export const deleteHabit = async (habitId) => {
  const res = await fetch(`${BASE_URL}/habits/${habitId}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  if (!res.ok) {
    const err = await res.json(); // get message from backend
    throw new Error(err.message || "Failed to delete habit");
  }

  return res.json();
};
