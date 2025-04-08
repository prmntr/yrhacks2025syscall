function Error() {
  return (
    <div className="text-center flex flex-col justify-center min-h-screen bg-gray-900">
      <p className="text-3xl font-semibold text-blue-600">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-200 sm:text-7xl">
        Page not found
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
        These are not the droids you are looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/dashboard"
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Dashboard
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="text-sm font-semibold text-gray-200"
        >
          Contact support
        </a>
      </div>
    </div>
  );
}

export default Error;
