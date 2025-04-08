function Profile() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50">
      <div className="w-full mx-5 my-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-row items-center px-5 py-5 lg:py-\5">
          {/* Profile Image */}
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="src\assets\react.svg"
            alt="Profile Image"
          />
          {/* Name and Description */}
          <div className="ml-6">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">John Doe</h5>
            <span className="text-md text-gray-500 dark:text-white">Grade 10</span>
            <p className="text-gray-400 dark:text-gray-400">Bayview Secondary School</p>
          </div>
          <div className="flex ml-auto space-x-12 px-5">
            <div className="ml-20">
              <span className="text-sm text-gray-500 dark:text-gray-400">Students Tutored</span>
              <h6 className="mb-1 text-center text-3xl font-bold text-gray-900 dark:text-white">
                3
              </h6>
            </div>
            <div className="ml-12">
              <span className="text-sm text-gray-500 dark:text-gray-400">Educated Hours</span>
              <h6 className="mb-1 text-center text-3xl font-bold text-gray-900 dark:text-white">
                24
              </h6>
            </div>
            <div className="lg:ml-12 flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-0.5">
                Teaching Since
              </span>
              <h6 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">Jan 2025</h6>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-1 mb-5">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit Profile
          </a>
          <a
            href="#"
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-400  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Profile Settings
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
