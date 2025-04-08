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
            <span className="text-sm text-gray-500 dark:text-gray-400">Grade 69</span>
          </div>
          <div className="mx-9">
            <span className="text-sm text-gray-500 dark:text-gray-400">Students Tutored</span>
            <h6 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">24</h6>
          </div>
        </div>
        <div className="flex justify-center  md:mt-6 mb-5 mt-5">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit Profile
          </a>
          <a
            href="#"
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Profile Settings
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
