export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to <span className="font-semibold">Habit Tracker</span>! Our
          mission is to help you build better habits and stay consistent with
          your goals. Whether you want to exercise more, read daily, or just
          live a healthier lifestyle, our app provides the tools you need to
          stay on track.
        </p>
        <p className="mt-4 text-gray-600">
          We believe small actions, done consistently, create big changes.
        </p>
      </div>
    </div>
  );
}
