export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Have questions, suggestions, or feedback? We’d love to hear from you!
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-left text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-left text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-left text-gray-700">Message</label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="5"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
