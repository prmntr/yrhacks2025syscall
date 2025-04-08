function Profile() {
  return (
    <div className="bg-gray-900">
      {/* Top Section */}
      <div className="flex justify-between items-center px-5 pt-5 pb-4">
        <h1 className="font-bold text-4xl text-gray-100">My Profile</h1>
        <div className="flex space-x-2">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit Profile
          </a>
          <a
            href="#"
            className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-400 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Profile Settings
          </a>
        </div>
      </div>

      {/* Profile Content */}
      <div className="mx-4 mt-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 pb-3.5">
        <div className="flex flex-row items-center px-5 py-5">
          {/* Profile Image */}
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="src\assets\skibidi.jpg"
            alt="Profile Image"
          />
          {/* Name and Description */}
          <div className="ml-6">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">John Doe</h5>
            <span className="text-md text-gray-500 dark:text-white">Grade 11</span>
            <p className="text-gray-400 dark:text-gray-400">Bayview Secondary School</p>
            {/* Tags */}
            <div className="mt-2 flex space-x-2">
              <span className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-lg">
                Teacher
              </span>
              <span className="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-lg">
                English
              </span>
              <span className="px-2 py-1 text-xs font-medium text-white bg-purple-500 rounded-lg">
                Math
              </span>
              <span className="mx-1 px-2 py-1 text-xs font-medium text-white bg-gray-700 rounded-lg">
                +
              </span>
            </div>
          </div>
          {/* Stats */}
          <div className="flex ml-auto space-x-12 px-5">
            <div className="ml-20">
              <span className="text-sm text-gray-500 dark:text-gray-400">Students Tutored</span>
              <h6 className="mb-1 text-center text-3xl font-bold text-gray-900 dark:text-white">
                14
              </h6>
            </div>
            <div className="ml-12">
              <span className="text-sm text-gray-500 dark:text-gray-400">Educated Hours</span>
              <h6 className="mb-1 text-center text-3xl font-bold text-gray-900 dark:text-white">
                48
              </h6>
            </div>
            <div className="lg:ml-12 flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-0.5">
                Tutoring Since
              </span>
              <h6 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">March 2023</h6>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="px-5 py-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum leo id nisi bibendum
            efficitur. Donec ultrices cursus urna, sit amet accumsan ex posuere ut. Vestibulum ac
            ipsum vel odio commodo elementum non nec sem. Nulla nec augue porta, tempor nisl ut,
            tincidunt quam. Fusce nec quam at purus varius maximus et id libero. Praesent bibendum,
            nisi a accumsan laoreet, augue elit egestas mauris, et congue ligula mi eu lorem.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;