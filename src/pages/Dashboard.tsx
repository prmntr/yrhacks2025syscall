import { useState } from 'react';

function Dashboard() {
  const today = new Date();
  // useState initialized to be the current month and year
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // logic to get the number of days in a month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);
  const calendarDays = Array(firstDayIndex)
    .fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  return (
    <div className="bg-gray-900">
      <h1 className="font-bold text-4xl text-gray-100 px-5 pt-5">Dashboard</h1>
      <h2 className="text-lg px-5 text-gray-300 pt-2">Welcome back, John.</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 min-h-135">
        <div className="bg-gray-800 shadow-xl rounded-lg p-4 col-span-2 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Upcoming Classes</h2>
          <div className="space-y-4">
            <div className="bg-blue-900 text-gray-200 p-3 rounded relative">
              <img
                src="src/assets/calculus.png"
                alt="Calculus"
                className="absolute inset-0 w-full h-full object-cover opacity-10 rounded"
              />
              <div className="relative z-10">
                <span>You're teaching</span>
                <h3 className="font-bold">Calculus and Vectors</h3>
                <div className="text-md text-gray-300">to Elijah Woods</div>
                <div className="text-sm font-thin text-gray-300">in 2 days</div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-gray-300">
                    <span className="bg-gray-800 px-2 py-1 rounded">Materials</span>
                    <span className="bg-gray-800 px-2 py-1 mx-2 rounded">Key Concepts</span>
                  </div>
                  <div className="text-gray-400 cursor-pointer text-3xl">...</div>
                </div>
              </div>
            </div>
            <div className="bg-green-900 text-gray-200 p-3 rounded relative">
              <img
                src="src\assets\chemistry.jpg"
                alt="Chemistry"
                className="absolute inset-0 w-full h-full object-cover opacity-10 rounded"
              />
              <div className="relative z-10">
                <span>You're learning</span>
                <h3 className="font-bold">Grade 12 Chemistry</h3>
                <div className="text-md text-gray-300">from Ryan Xu</div>
                <div className="text-sm font-thin text-gray-300">in 4 days</div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-gray-300">
                    <span className="bg-gray-800 px-2 py-1 rounded">Previous Notes</span>
                    <span className="bg-gray-800 px-2 py-1 mx-2 rounded">Key Concepts</span>
                  </div>
                  <div className="text-gray-400 cursor-pointer text-3xl">...</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-900 text-gray-200 p-3 rounded relative">
              <img
                src="src\assets\phil.jpg"
                alt="Philosophy"
                className="absolute inset-0 w-full h-full object-cover opacity-10 rounded"
              />
              <div className="relative z-10">
                <span>You're teaching</span>
                <h3 className="font-bold">Calculus and Vectors</h3>
                <div className="text-md text-gray-300">to Donda West</div>
                <div className="text-sm font-thin text-gray-300">in a week</div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-gray-300">
                    <span className="bg-gray-800 px-2 py-1 rounded">Materials</span>
                    <span className="bg-gray-800 px-2 py-1 mx-2 rounded">Key Concepts</span>
                  </div>
                  <div className="text-gray-400 cursor-pointer text-3xl">...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 shadow-xl rounded-lg p-4 col-span-2 md:col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Stats & Tasks</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Lessons Completed: 12</li>
            <li>Pending Assignments: 3</li>
            <li>Next Exam: April 15</li>
            <li>Attendance: 96%</li>
          </ul>
        </div>
        <div className="bg-gray-800 shadow-xl rounded-lg px-6 py-4 col-span-2 md:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-100">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <div className="space-x-2">
              <button
                onClick={handlePrev}
                className="px-3 py-1 bg-blue-500 text-gray-200 rounded hover:bg-blue-700"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="px-3 py-1 bg-blue-500 text-gray-200 rounded hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 text-center font-medium text-gray-400">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          <div className="grid grid-cols-7 text-center mt-2 gap-2 text-sm">
            {calendarDays.map((day, index) =>
              day ? (
                <div
                  key={index}
                  className="py-1 rounded bg-gray-700 text-gray-200 hover:bg-gray-500 text-lg"
                >
                  {day}
                </div>
              ) : (
                <div key={index}></div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
