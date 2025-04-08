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
    <div>
      <h1 className="font-bold mt-5 ml-5 mb-3 text-4xl">Dashboard</h1>
      <h2 className="px-6 text-lg">Welcome back, John.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 min-h-135">
        <div className="bg-white shadow-xl rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
          <div className="flex flex-row items-center mb-4">
            <div className="bg-amber-300">fdsdfs</div>

          </div>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Stats & Tasks</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Lessons Completed: 12</li>
            <li>Pending Assignments: 3</li>
            <li>Next Exam: April 15</li>
            <li>Attendance: 96%</li>
          </ul>
        </div>
        <div className="bg-white shadow-xl rounded-lg px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <div className="space-x-2">
              <button
                onClick={handlePrev}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 text-center font-medium text-gray-600">
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
                <div key={index} className="py-2 rounded hover:bg-gray-200">
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