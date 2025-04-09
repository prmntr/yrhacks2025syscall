function Homepage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 overflow-hidden">
      <header className="bg-gray-800 min-h-120 relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
          src="src/assets/high-school-students-tutorly.mp4"
          autoPlay
          loop
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-70 z-5"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-screen text-left space-y-4 ml-10">
          <h1 className="text-4xl md:text-5xl font-bold" role="heading" aria-level={1}>
            Tutoring done right.
          </h1>
          <p className="text-lg md:text-xl">Empowering students through modernized software.</p>
            <button
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => (window.location.href = '/dashboard')}
            >
            My Dashboard
            </button>
            <div className="absolute bottom-4 left-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-200 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
        </div>

      </header>

      <main id="main" className="max-w-7xl mx-auto p-8 space-y-16" role="main">
        {/* About Us and Our Mission side by side */}
        <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 border border-gray-700 rounded-2xl p-6 bg-gray-800 shadow-md">
          {/* Left side: About Us */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold mb-4" role="heading" aria-level={2}>
              About Us
            </h2>
            <p>
              Tutorly is a student-first dashboard built to simplify educational workflows and
              promote productivity.
            </p>
          </div>

          {/* Right side: Our Mission */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold mb-4" role="heading" aria-level={2}>
              Our Methods
            </h2>
            <p>
              We leverage cutting-edge technology to provide personalized dashboards, track
              progress, and enhance learning experiences.{' '}
            </p>
          </div>
        </section>

        {/* Third box underneath: Placeholder text */}
        <section className="border border-gray-700 rounded-2xl p-6 bg-gray-800 shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-center" role="heading" aria-level={2}>
            Our Mission
          </h2>
          <p>
            At Tutorly, we aim to bridge the gap between students and the academic support they
            need. We understand the challenges many students face in finding help, especially from
            personal experience working with ESL learners. Our mission is to make it easier for
            tutors and tutees to connect, enabling students to access the assistance they need,
            whenever and wherever they need it. Through our unique tag system, we ensure that every
            student can find the precise help they’re looking for. At Tutorly, our goal is simple:
            to support our fellow students by making tutoring accessible and effective for everyone.{' '}
          </p>
        </section>

        {/* Features */}
        <section className="border border-gray-700 rounded-2xl p-6 bg-gray-800 shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-center" role="heading" aria-level={2}>
            Features
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-disc list-inside text-left">
            <li>Interactive Calendar to manage your schedule</li>
            <li>Track your assignments and class performance</li>
            <li>Responsive design for any device</li>
            <li>Secure and private data handling</li>
            <li>Personalized content and insights</li>
            <li>Integration with learning resources</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
