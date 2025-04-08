import { useState } from "react";

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
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);
  const calendarDays = Array(firstDayIndex).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <div className="bg-gray-900">
      <h1 className="font-bold text-4xl text-gray-100 px-5 pt-5">Dashboard</h1>
      <h2 className="text-lg px-5 text-gray-300 pt-2">Welcome back, John.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 min-h-135">
      <div className="bg-gray-800 shadow-xl rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Upcoming Classes</h2>
        <div className="flex flex-row items-center mb-4">
        <div className="bg-gray-700 text-gray-200 p-2 rounded">Calculas and Vectors -  James Johnson  - April 12th  -  03:30PM  </div>
        </div>
      </div>
      <div className="bg-gray-800 shadow-xl rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Stats & Tasks</h2>
        <ul className="text-gray-300 space-y-2">
        <li>Lessons Completed: 12</li>
        <li>Pending Assignments: 3</li>
        <li>Next Exam: April 15</li>
        <li>Attendance: 96%</li>
        </ul>
      </div>
      <div className="bg-gray-800 shadow-xl rounded-lg px-6 py-4">
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
          <div key={index} className="py-1 rounded bg-gray-700 text-gray-200 hover:bg-gray-500 text-lg">
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