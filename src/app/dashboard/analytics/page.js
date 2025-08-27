"use client";
import { useState, useEffect } from "react";

export default function Analytics() {
  const [weeklyData, setWeeklyData] = useState([
    { day: "Mon", completed: 2, total: 3 },
    { day: "Tue", completed: 3, total: 3 },
    { day: "Wed", completed: 1, total: 3 },
    { day: "Thu", completed: 2, total: 3 },
    { day: "Fri", completed: 3, total: 3 },
    { day: "Sat", completed: 1, total: 3 },
    { day: "Sun", completed: 0, total: 3 },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics 📊</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weekly Progress Chart */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className=" text-black text-xl font-semibold mb-4">
            Weekly Habit Completion
          </h2>
          <div className="flex items-end justify-between h-64">
            {weeklyData.map((day) => {
              const heightPercent = (day.completed / day.total) * 100;
              return (
                <div key={day.day} className="flex flex-col items-center w-10">
                  <div
                    className="bg-indigo-600 w-full rounded-t"
                    style={{ height: `${heightPercent}%` }}
                  ></div>
                  <span className="text-gray-700 mt-2">{day.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Completion Summary */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl text-black font-semibold mb-4">
            Completion Summary
          </h2>
          <div className="space-y-2">
            <div className="flex text-black justify-between">
              <span>Total Habits Completed:</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex text-black justify-between">
              <span>Total Habits Pending:</span>
              <span className="font-bold">9</span>
            </div>
            <div className="flex text-black justify-between">
              <span>Best Streak:</span>
              <span className="font-bold">5 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
