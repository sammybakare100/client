const BASE_URL = "http://localhost:5000/api";

export const fetchHabits = async (userId) => {
  const res = await fetch(`${BASE_URL}/habits/${userId}`);
  return res.json();
};

export const addHabit = async (habit) => {
  const res = await fetch(`${BASE_URL}/habits`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(habit),
  });
  return res.json();
};

export const toggleHabit = async (habitId) => {
  const res = await fetch(`${BASE_URL}/habits/${habitId}`, { method: "PUT" });
  return res.json();
};

export const deleteHabit = async (habitId) => {
  const res = await fetch(`${BASE_URL}/habits/${habitId}`, {
    method: "DELETE",
  });
  return res.json();
};
