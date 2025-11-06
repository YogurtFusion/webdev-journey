// app/about/page.jsx
export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">About chapple</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center leading-relaxed">
        Welcome to <strong>chapple</strong> — a place in a chruch it's my imagination and  I love to use it.
        <br /> <br />

      </p>

      <div className="mt-8">
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
