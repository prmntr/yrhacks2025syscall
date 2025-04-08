function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <a href="#main" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white text-blue-600 px-4 py-2 rounded z-50">
        Skip to main content
      </a>

      <header className="p-6 text-center bg-blue-700">
        <h1 className="text-4xl md:text-5xl font-bold" role="heading" aria-level={1}>Welcome to EduPlatform</h1>
        <p className="text-lg md:text-xl mt-2">Empowering learning through technology</p>
      </header>

      <main id="main" className="flex flex-col items-center p-8 space-y-12" role="main">
        <section className="max-w-3xl text-center bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4" role="heading" aria-level={2}>Why EduPlatform?</h2>
          <p className="text-lg mb-4">
            Your personalized dashboard for managing classes, tracking progress, and staying ahead.
          </p>
          <a
            href="/dashboard"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white transition"
          >
            Go to Dashboard
          </a>
        </section>

        <section className="max-w-4xl w-full text-center">
          <h2 className="text-2xl font-bold mb-4" role="heading" aria-level={2}>Features</h2>
          <ul className="grid md:grid-cols-3 gap-6 text-left text-white list-disc list-inside">
            <li>Interactive Calendar to manage your schedule</li>
            <li>Track your assignments and class performance</li>
            <li>Responsive design for any device</li>
            <li>Secure and private data handling</li>
            <li>Personalized content and insights</li>
            <li>Integration with learning resources</li>
          </ul>
        </section>

        <section className="max-w-3xl text-center bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2" role="heading" aria-level={2}>About Us</h2>
          <p>
            EduPlatform is a student-first dashboard built to simplify educational workflows and promote productivity.
          </p>
        </section>

        <section className="max-w-3xl text-center bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2" role="heading" aria-level={2}>Contact</h2>
          <p>Email us at <a href="mailto:support@eduplatform.com" className="underline text-white hover:text-gray-200">support@eduplatform.com</a></p>
        </section>
      </main>

      <footer className="text-center p-4 text-sm bg-blue-700 mt-8" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} EduPlatform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;