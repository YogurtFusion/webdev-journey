// app/about/page.jsx
export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">About Solim</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center leading-relaxed">
        Welcome to <strong>Solim</strong> — a platform made for independent filmmakers and solo producers 
        to share their creativity with the world.  
        <br /> <br />
        Our mission is to empower creators by giving them full credit, 
        easy streaming via embedded links, and optional donation support — 
        all without worrying about hosting costs or paywalls.
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
