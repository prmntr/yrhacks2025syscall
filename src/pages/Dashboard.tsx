import { useState } from "react";

function Dashboard() {

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

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
    <>
      <h1 className="font-bold m-5 text-4xl">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Upcoming Classes</h2>
          <p className="text-gray-600">View your scheduled lessons and prepare ahead.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <p className="text-gray-600">Check what you've completed recently.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Resources</h2>
          <p className="text-gray-600">Access study materials and helpful links.</p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow px-6 py-4 m-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{monthNames[currentMonth]} {currentYear}</h2>
          <div className="space-x-2">
            <button onClick={handlePrev} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Prev</button>
            <button onClick={handleNext} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Next</button>
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
    </>
  );
}

export default Dashboard;