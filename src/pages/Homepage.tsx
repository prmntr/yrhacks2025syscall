function Homepage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 overflow-hidden">
      <header className="bg-gray-800 min-h-160 relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
        src="src/assets/high-school-students-tutorly.mp4"
        autoPlay
        loop
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-70 z-5"></div>
      <div className="relative z-10 flex flex-col items-start justify-center m-10 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold" role="heading" aria-level={1}>
        Tutoring done right.
        </h1>
        <p className="text-lg md:text-xl">
        Empowering students through modernized software.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
        Learn More
        </button>
      </div>
      </header>

      <main id="main" className="max-w-7xl mx-auto p-8 space-y-16" role="main">
        <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4" role="heading" aria-level={2}>
              About Us
            </h2>
            <p>
              EduPlatform is a student-first dashboard built to simplify educational workflows and
              promote productivity.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg"></div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg"></div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4" role="heading" aria-level={2}>
              Our Methods
            </h2>
            <p>
              We leverage cutting-edge technology to provide personalized dashboards, track
              progress, and enhance learning experiences.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4" role="heading" aria-level={2}>
            Features
          </h2>
          <ul className="grid md:grid-cols-3 gap-6 text-left list-disc list-inside">
            <li>Interactive Calendar to manage your schedule</li>
            <li>Track your assignments and class performance</li>
            <li>Responsive design for any device</li>
            <li>Secure and private data handling</li>
            <li>Personalized content and insights</li>
            <li>Integration with learning resources</li>
          </ul>
        </section>
      </main>

      <footer className="text-center p-4 text-sm bg-gray-800 mt-8" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} EduPlatform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
